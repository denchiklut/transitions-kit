import { type FC, useRef } from 'react'
import { Transition } from 'react-transition-group'
import { CollapseRoot, CollapseWrapper, CollapseWrapperInner } from './styles'
import type { CollapseProps } from './collapse.types'

export const Collapse: FC<CollapseProps> = ({
	in: inProp,
	orientation = 'vertical',
	collapsedSize: collapsedSizeProp = '0px',
	timeout = 500,
	unmountOnExit,
	children
}) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const collapsedSize =
		typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp
	const isHorizontal = orientation === 'horizontal'
	const size = isHorizontal ? 'width' : 'height'

	const ownerState = {
		orientation,
		in: inProp,
		collapsedSize
	}

	const getWrapperSize = () => {
		return wrapperRef.current
			? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight']
			: 0
	}

	const handleEnter = (node: HTMLElement) => {
		if (wrapperRef.current && isHorizontal) {
			wrapperRef.current.style.position = 'absolute'
		}
		node.style[size] = collapsedSize
	}

	const handleEntering = (node: HTMLElement) => {
		const wrapperSize = getWrapperSize()
		if (wrapperRef.current && isHorizontal) {
			wrapperRef.current.style.position = ''
		}

		node.style.transitionDuration = `${timeout}ms`
		node.style[size] = `${wrapperSize}px`
	}

	const handleEntered = (node: HTMLElement) => {
		node.style[size] = 'auto'
	}

	const handleExit = (node: HTMLElement) => {
		node.style[size] = `${getWrapperSize()}px`
		getWrapperSize() // think a bit
	}

	const handleExiting = (node: HTMLElement) => {
		node.style.transitionDuration = `${timeout}ms`
		node.style[size] = collapsedSize
	}

	return (
		<Transition
			in={inProp}
			timeout={timeout}
			onExit={handleExit}
			onEntere={handleEnter}
			onEntered={handleEntered}
			onExiting={handleExiting}
			onEntering={handleEntering}
			unmountOnExit={unmountOnExit}
		>
			{state => (
				<CollapseRoot
					ownerState={{ ...ownerState, state }}
					style={{ [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize }}
				>
					<CollapseWrapper ownerState={{ ...ownerState, state }} ref={wrapperRef}>
						<CollapseWrapperInner ownerState={{ ...ownerState, state }}>
							{children}
						</CollapseWrapperInner>
					</CollapseWrapper>
				</CollapseRoot>
			)}
		</Transition>
	)
}
