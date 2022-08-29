import { Transition } from 'react-transition-group'
import { cloneElement, forwardRef, useCallback, useEffect, useRef } from 'react'
import {
	createTransition,
	ownerWindow,
	reflow,
	debounce,
	useForkRef,
	easing,
	duration,
	getTransitionProps,
	ElementWithRef
} from '../utils'
import { setTranslateValue } from './slide.utils'
import { SlideProps } from './slide.types'

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

	const childrenRef = useRef<HTMLElement | undefined>(undefined)
	const handleRefIntermediary = useForkRef((children as ElementWithRef).ref, childrenRef)
	const handleRef = useForkRef(handleRefIntermediary, ref)

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		setTranslateValue(direction, node, containerProp)
		reflow(node)

		onEnter?.(node, isAppearing)
	}

	const handleEntering = (node: HTMLElement, isAppearing: boolean) => {
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

	const handleExit = (node: HTMLElement) => {
		const transitionProps = getTransitionProps(
			{ timeout, style, easing: easingProp },
			{ mode: 'exit' }
		)

		node.style.webkitTransition = createTransition('-webkit-transform', transitionProps)
		node.style.transition = createTransition('transform', transitionProps)

		setTranslateValue(direction, node, containerProp)

		onExit?.(node)
	}

	const handleExited = (node: HTMLElement) => {
		// No need for transitions when the component is hidden
		node.style.webkitTransition = ''
		node.style.transition = ''

		onExited?.(node)
	}

	const handleAddEndListener = (next: () => void) => {
		addEndListener?.(childrenRef.current!, next)
	}

	const updatePosition = useCallback(() => {
		if (childrenRef.current) {
			setTranslateValue(direction, childrenRef.current, containerProp)
		}
	}, [direction, containerProp])

	useEffect(() => {
		// Skip configuration where the position is screen size invariant.
		if (inProp || direction === 'down' || direction === 'right') {
			return undefined
		}

		const handleResize = debounce(() => {
			if (childrenRef.current) {
				setTranslateValue(direction, childrenRef.current, containerProp)
			}
		})

		const containerWindow = ownerWindow(childrenRef.current!)
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
