import type { SlideProps } from './slide.types'
import { ownerWindow } from '../utils'

function getTranslateValue(
	direction: SlideProps['direction'],
	node: HTMLElement,
	resolvedContainer?: Element | null
) {
	const rect = node.getBoundingClientRect()
	const containerRect = resolvedContainer?.getBoundingClientRect()
	const containerWindow = ownerWindow(node)

	const computedStyle = containerWindow.getComputedStyle(node)
	const transform =
		computedStyle.getPropertyValue('-webkit-transform') ||
		computedStyle.getPropertyValue('transform')

	let offsetX = 0
	let offsetY = 0

	if (transform && transform !== 'none' && typeof transform === 'string') {
		const transformValues = transform.split('(')[1].split(')')[0].split(',')
		offsetX = parseInt(transformValues[4], 10)
		offsetY = parseInt(transformValues[5], 10)
	}

	if (direction === 'left') {
		if (containerRect) {
			return `translateX(${containerRect.right + offsetX - rect.left}px)`
		}

		return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`
	}

	if (direction === 'right') {
		if (containerRect) {
			return `translateX(-${rect.right - containerRect.left - offsetX}px)`
		}

		return `translateX(-${rect.left + rect.width - offsetX}px)`
	}

	if (direction === 'up') {
		if (containerRect) {
			return `translateY(${containerRect.bottom + offsetY - rect.top}px)`
		}
		return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`
	}

	// direction === 'down'
	if (containerRect) {
		return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`
	}
	return `translateY(-${rect.top + rect.height - offsetY}px)`
}

function resolveContainer(containerPropProp: SlideProps['container']) {
	return typeof containerPropProp === 'function' ? containerPropProp() : containerPropProp
}

export function setTranslateValue(
	direction: SlideProps['direction'],
	node: HTMLElement,
	containerProp: SlideProps['container']
) {
	const resolvedContainer = resolveContainer(containerProp)
	const transform = getTranslateValue(direction, node, resolvedContainer)

	if (transform) {
		node.style.webkitTransform = transform
		node.style.transform = transform
	}
}
