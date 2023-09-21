import { Transition } from 'react-transition-group'
import { forwardRef, useEffect, useRef } from 'react'
import { duration, getAutoHeightDuration, getTransitionProps, useForkRef, reflow } from '../utils'
import { CollapseRoot, CollapseWrapper, CollapseWrapperInner } from './collapse.styles'
import type { CollapseProps } from './collapse.types'

export const Collapse = forwardRef((props: CollapseProps, ref) => {
	const {
		addEndListener,
		children,
		className,
		collapsedSize: collapsedSizeProp = '0px',
		easing,
		in: inProp,
		onEnter,
		onEntered,
		onEntering,
		onExit,
		onExited,
		onExiting,
		orientation = 'vertical',
		style,
		timeout = duration.standard,
		...other
	} = props

	const ownerState = {
		...props,
		orientation,
		collapsedSize: collapsedSizeProp
	}

	const timer = useRef<number>()
	const nodeRef = useRef<HTMLElement>(null)
	const handleRef = useForkRef(nodeRef, ref)
	const wrapperRef = useRef<HTMLElement>(null)
	const autoTransitionDuration = useRef<string | number>()
	const collapsedSize =
		typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp
	const isHorizontal = orientation === 'horizontal'
	const size = isHorizontal ? 'width' : 'height'

	useEffect(() => {
		return () => {
			clearTimeout(timer.current)
		}
	}, [])

	const normalizedTransitionCallback = (callback: Function) => (isAppearing?: boolean) => {
		const node = nodeRef.current
		if (callback && node) {
			if (isAppearing === undefined) callback(node)
			else callback(node, isAppearing)
		}
	}

	const getWrapperSize = () =>
		wrapperRef.current ? wrapperRef.current[isHorizontal ? 'scrollWidth' : 'scrollHeight'] : 0

	const handleEnter = normalizedTransitionCallback((node: HTMLElement, isAppearing: boolean) => {
		node.style[size] = collapsedSize

		onEnter?.(node, isAppearing)
	})

	const handleEntering = normalizedTransitionCallback(
		(node: HTMLElement, isAppearing: boolean) => {
			const wrapperSize = getWrapperSize()
			const { duration: transitionDuration, easing: transitionTimingFunction } =
				getTransitionProps({ style, timeout, easing }, { mode: 'enter' })

			if (timeout === 'auto') {
				const duration2 = getAutoHeightDuration(wrapperSize)
				node.style.transitionDuration = `${duration2}ms`
				autoTransitionDuration.current = duration2
			} else {
				node.style.transitionDuration =
					typeof transitionDuration === 'string'
						? transitionDuration
						: `${transitionDuration}ms`
			}

			node.style[size] = `${wrapperSize}px`
			node.style.transitionTimingFunction = `${transitionTimingFunction}`

			onEntering?.(node, isAppearing)
		}
	)

	const handleEntered = normalizedTransitionCallback(
		(node: HTMLElement, isAppearing: boolean) => {
			node.style[size] = 'auto'

			onEntered?.(node, isAppearing)
		}
	)

	const handleExit = normalizedTransitionCallback((node: HTMLElement) => {
		node.style[size] = `${getWrapperSize()}px`
		if (wrapperRef.current) reflow(wrapperRef.current)

		onExit?.(node)
	})

	const handleExiting = normalizedTransitionCallback((node: HTMLElement) => {
		const wrapperSize = getWrapperSize()
		const { duration: transitionDuration, easing: transitionFn } = getTransitionProps(
			{ style, timeout, easing },
			{ mode: 'exit' }
		)

		if (timeout === 'auto') {
			// Actually it just calculates animation duration based on size
			const duration2 = getAutoHeightDuration(wrapperSize)
			node.style.transitionDuration = `${duration2}ms`
			autoTransitionDuration.current = duration2
		} else {
			node.style.transitionDuration =
				typeof transitionDuration === 'string'
					? transitionDuration
					: `${transitionDuration}ms`
		}

		node.style[size] = collapsedSize
		node.style.transitionTimingFunction = transitionFn ?? ''

		onExiting?.(node)
	})

	const handleExited = normalizedTransitionCallback(onExited as Function)

	const handleAddEndListener = (next: () => void) => {
		if (timeout === 'auto') {
			timer.current = window.setTimeout(next, Number(autoTransitionDuration.current) || 0)
		}

		if (nodeRef.current) {
			addEndListener?.(nodeRef.current, next)
		}
	}

	return (
		<Transition
			in={inProp}
			nodeRef={nodeRef}
			onEnter={handleEnter}
			onEntered={handleEntered}
			onEntering={handleEntering}
			onExit={handleExit}
			onExited={handleExited}
			onExiting={handleExiting}
			addEndListener={handleAddEndListener}
			timeout={timeout === 'auto' ? undefined : timeout}
			{...other}
		>
			{state => (
				<CollapseRoot
					ref={handleRef}
					ownerState={{ ...ownerState, state }}
					style={{
						[isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize,
						...style
					}}
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
})
