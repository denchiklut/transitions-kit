import { Transition } from 'react-transition-group'
import { cloneElement, forwardRef, useCallback, useEffect, useRef } from 'react'
import {
	type ElementWithRef,
	getTransitionProps,
	createTransition,
	ownerWindow,
	reflow,
	debounce,
	useForkRef,
	easing,
	duration
} from '../utils'
import { setTranslateValue } from './slide.utils'
import type { SlideProps } from './slide.types'

export const Slide = forwardRef((props: SlideProps, ref) => {
	const defaultEasing = {
		enter: easing.easeOut,
		exit: easing.sharp
	}

	const defaultTimeout = {
		enter: duration.enteringScreen,
		exit: duration.leavingScreen
	}

	const {
		addEndListener,
		appear = true,
		children,
		container: containerProp,
		direction = 'down',
		easing: easingProp = defaultEasing,
		in: inProp,
		onEnter,
		onEntered,
		onEntering,
		onExit,
		onExited,
		onExiting,
		style,
		timeout = defaultTimeout,
		...other
	} = props

	const nodeRef = useRef<HTMLElement | undefined>(undefined)
	const handleRefIntermediary = useForkRef((children as ElementWithRef).ref, nodeRef)
	const handleRef = useForkRef(handleRefIntermediary, ref)

	const normalizedTransitionCallback = (callback: Function) => (isAppearing?: boolean) => {
		const node = nodeRef.current
		if (callback && node) {
			if (isAppearing === undefined) callback(node)
			else callback(node, isAppearing)
		}
	}

	const handleEnter = normalizedTransitionCallback((node: HTMLElement, isAppearing: boolean) => {
		setTranslateValue(direction, node, containerProp)
		reflow(node)

		onEnter?.(node, isAppearing)
	})

	const handleEntering = normalizedTransitionCallback(
		(node: HTMLElement, isAppearing: boolean) => {
			const transitionProps = getTransitionProps(
				{ timeout, style, easing: easingProp },
				{ mode: 'enter' }
			)

			node.style.webkitTransition = createTransition('-webkit-transform', transitionProps)
			node.style.transition = createTransition('transform', transitionProps)

			node.style.webkitTransform = 'none'
			node.style.transform = 'none'

			onEntering?.(node, isAppearing)
		}
	)

	const handleExit = normalizedTransitionCallback((node: HTMLElement) => {
		const transitionProps = getTransitionProps(
			{ timeout, style, easing: easingProp },
			{ mode: 'exit' }
		)

		node.style.webkitTransition = createTransition('-webkit-transform', transitionProps)
		node.style.transition = createTransition('transform', transitionProps)

		setTranslateValue(direction, node, containerProp)

		onExit?.(node)
	})

	const handleExited = normalizedTransitionCallback((node: HTMLElement) => {
		// No need for transitions when the component is hidden
		node.style.webkitTransition = ''
		node.style.transition = ''

		onExited?.(node)
	})

	const handleAddEndListener = (next: () => void) => {
		if (nodeRef.current) {
			addEndListener?.(nodeRef.current, next)
		}
	}

	const updatePosition = useCallback(() => {
		if (nodeRef.current) {
			setTranslateValue(direction, nodeRef.current, containerProp)
		}
	}, [direction, containerProp])

	useEffect(() => {
		// Skip configuration where the position is screen size invariant.
		if (inProp || direction === 'down' || direction === 'right') {
			return undefined
		}

		const handleResize = debounce(() => {
			if (nodeRef.current) {
				setTranslateValue(direction, nodeRef.current, containerProp)
			}
		})

		const containerWindow = ownerWindow(nodeRef.current!)
		containerWindow.addEventListener('resize', handleResize)
		return () => {
			handleResize.clear()
			containerWindow.removeEventListener('resize', handleResize)
		}
	}, [direction, inProp, containerProp])

	useEffect(() => {
		if (!inProp) updatePosition()
	}, [inProp, updatePosition])

	return (
		<Transition
			in={inProp}
			appear={appear}
			nodeRef={nodeRef}
			timeout={timeout}
			onEnter={handleEnter}
			onEntered={onEntered}
			onEntering={handleEntering}
			onExit={handleExit}
			onExited={handleExited}
			onExiting={onExiting}
			addEndListener={handleAddEndListener}
			{...other}
		>
			{state =>
				cloneElement(children, {
					ref: handleRef,
					style: {
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...style,
						...children.props.style
					}
				})
			}
		</Transition>
	)
})
