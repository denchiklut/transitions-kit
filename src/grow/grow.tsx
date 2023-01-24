import { Transition } from 'react-transition-group'
import { cloneElement, forwardRef, useEffect, useRef } from 'react'
import {
	ElementWithRef,
	createTransition,
	getAutoHeightDuration,
	getTransitionProps,
	useForkRef,
	reflow
} from '../utils'
import { getScale, isWebKit154, styles } from './grow.utils'
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
	const nodeRef = useRef<HTMLElement>(null)
	const foreignRef = useForkRef((children as ElementWithRef).ref, ref)
	const handleRef = useForkRef(nodeRef, foreignRef)

	const normalizedTransitionCallback = (callback: Function) => (isAppearing?: boolean) => {
		const node = nodeRef.current
		if (callback && node) {
			if (isAppearing === undefined) callback(node)
			else callback(node, isAppearing)
		}
	}

	const handleEntered = normalizedTransitionCallback(onEntered as Function)
	const handleEntering = normalizedTransitionCallback(onEntering as Function)
	const handleExited = normalizedTransitionCallback(onExited as Function)
	const handleExiting = normalizedTransitionCallback(onExiting as Function)

	const handleEnter = normalizedTransitionCallback((node: HTMLElement, isAppearing: boolean) => {
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
				duration: (isWebKit154||typeof duration === 'string') ? duration : duration * 0.666,
				delay,
				easing: transitionTimingFunction
			})
		].join(',')

		onEnter?.(node, isAppearing)
	})

	const handleExit = normalizedTransitionCallback((node: HTMLElement) => {
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
			createTransition('opacity', { duration, delay }),
			createTransition('transform', {
				duration: (isWebKit154||typeof duration === 'string') ? duration : duration * 0.666,
				delay: (isWebKit154||typeof duration === 'string') ? delay : delay || duration * 0.333,
				easing: transitionTimingFunction
			})
		].join(',')

		node.style.opacity = '0'
		node.style.transform = getScale(0.75)

		onExit?.(node)
	})

	const handleAddEndListener = (next: () => void) => {
		if (timeout === 'auto') {
			timer.current = setTimeout(next, autoTimeout.current || 0)
		}

		if (nodeRef.current) {
			addEndListener?.(nodeRef.current, next)
		}
	}

	useEffect(() => {
		return () => {
			clearTimeout(timer.current)
		}
	}, [])

	return (
		<Transition
			in={inProp}
			appear={appear}
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
