import { Transition } from 'react-transition-group'
import { cloneElement, forwardRef, useEffect, useRef } from 'react'
import {
	createTransition,
	getAutoHeightDuration,
	getTransitionProps,
	isNumber,
	reflow,
	useForkRef
} from '../utils'
import { getScale, styles } from './grow.utils'
import { GrowProps } from './grow.types'

export const Grow = forwardRef((props: GrowProps, ref) => {
	const {
		addEndListener,
		appear = true,
		children,
		easing,
		in: inProp,
		onEnter,
		onEntered,
		onEntering,
		onExit,
		onExited,
		onExiting,
		style,
		timeout = 'auto',
		...other
	} = props
	const timer = useRef<NodeJS.Timer>()
	const autoTimeout = useRef<number>()
	const handleRef = useForkRef(children.ref, ref)

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		const {
			duration: transitionDuration,
			delay,
			easing: transitionTimingFunction
		} = getTransitionProps({ style, timeout, easing }, { mode: 'enter' })

		let duration
		if (timeout === 'auto') {
			duration = getAutoHeightDuration(node.clientHeight)
			autoTimeout.current = duration
		} else {
			duration = transitionDuration
		}

		node.style.transition = [
			createTransition('opacity', { duration, delay }),
			createTransition('transform', {
				duration: isNumber(duration) ? duration * 0.666 : duration,
				delay,
				easing: transitionTimingFunction
			})
		].join(',')

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		const {
			duration: transitionDuration,
			delay,
			easing: transitionTimingFunction
		} = getTransitionProps({ style, timeout, easing }, { mode: 'exit' })

		let duration
		if (timeout === 'auto') {
			duration = getAutoHeightDuration(node.clientHeight)
			autoTimeout.current = duration
		} else {
			duration = transitionDuration
		}

		node.style.transition = [
			createTransition('opacity', {
				duration,
				delay
			}),
			createTransition('transform', {
				duration: isNumber(duration) ? duration * 0.666 : duration,
				delay: isNumber(duration) ? delay || duration * 0.333 : delay,
				easing: transitionTimingFunction
			})
		].join(',')

		node.style.opacity = '0'
		node.style.transform = getScale(0.75)

		onExit?.(node)
	}

	const handleAddEndListener = (node: HTMLElement, next: () => void) => {
		if (timeout === 'auto') {
			timer.current = setTimeout(next, autoTimeout.current || 0)
		}

		addEndListener?.(node, next)
	}

	useEffect(() => {
		return () => {
			clearTimeout(timer.current)
		}
	}, [])

	return (
		<Transition
			appear={appear}
			in={inProp}
			onEnter={handleEnter}
			onEntered={onEntered}
			onEntering={onEntering}
			onExit={handleExit}
			onExited={onExited}
			onExiting={onExiting}
			addEndListener={handleAddEndListener}
			timeout={timeout === 'auto' ? undefined : timeout}
			{...other}
		>
			{state =>
				cloneElement(children, {
					ref: handleRef,
					style: {
						opacity: 0,
						transform: getScale(0.75),
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...styles[state],
						...style,
						...children.props.style
					}
				})
			}
		</Transition>
	)
})
