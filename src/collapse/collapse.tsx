import { forwardRef, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'
import {
	duration,
	ElementWithRef,
	getAutoHeightDuration,
	getTransitionProps,
	useForkRef
} from '../utils'
import { CollapseRoot, CollapseWrapper, CollapseWrapperInner } from './collapse.styles'
import { CollapseProps } from './collapse.types'

export const Collapse = forwardRef((props: CollapseProps, ref) => {
	const {
		addEndListener,
		children,
		className,
		collapsedSize: collapsedSizeProp = '0px',
		component,
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

	const timer = useRef<NodeJS.Timer>()
	const handleRef = useForkRef((children as ElementWithRef).ref, ref)
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

	const getWrapperSize = () =>
		wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		if (wrapperRef.current && isHorizontal) {
			// Set absolute position to get the size of collapsed content
			wrapperRef.current.style.position = 'absolute'
		}
		node.style[size] = collapsedSize

		onEnter?.(node, isAppearing)
	}

	const handleEntering = (node: HTMLElement, isAppearing: boolean) => {
		const wrapperSize = getWrapperSize()

		if (wrapperRef.current && isHorizontal) {
			// After the size is read reset the position back to default
			wrapperRef.current.style.position = ''
		}

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

	const handleEntered = (node: HTMLElement, isAppearing: boolean) => {
		node.style[size] = 'auto'

		onEntered?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		node.style[size] = `${getWrapperSize()}px`

		onExit?.(node)
	}

	const handleExiting = (node: HTMLElement) => {
		const wrapperSize = getWrapperSize()
		const { duration: transitionDuration, easing: transitionTimingFunction } =
			getTransitionProps({ style, timeout, easing }, { mode: 'exit' })

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
		node.style.transitionTimingFunction = `${transitionTimingFunction}`

		onExiting?.(node)
	}

	const handleAddEndListener = (node: HTMLElement, next: () => void) => {
		if (timeout === 'auto') {
			timer.current = setTimeout(next, Number(autoTransitionDuration.current) || 0)
		}

		addEndListener?.(node, next)
	}

	return (
		<Transition
			in={inProp}
			onEnter={handleEnter}
			onEntered={handleEntered}
			onEntering={handleEntering}
			onExit={handleExit}
			onExited={onExited}
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
