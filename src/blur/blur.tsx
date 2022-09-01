import { cloneElement, forwardRef, useRef } from 'react'
import { Transition } from 'react-transition-group'
import {
	duration,
	ElementWithRef,
	createTransition,
	getTransitionProps,
	useForkRef,
	reflow
} from '../utils'
import { BlurProps } from './blur.types'
import { getCSS } from './blur.utils'

export const Blur = forwardRef((props: BlurProps, ref) => {
	const defaultTimeout = {
		enter: duration.enteringScreen,
		exit: duration.leavingScreen
	}

	const {
		addEndListener,
		appear = true,
		children,
		easing,
		in: inProp,
		radius = 25,
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

	const handleEntering = normalizedTransitionCallback(onEntering as Function)
	const handleEntered = normalizedTransitionCallback(onEntered as Function)
	const handleExiting = normalizedTransitionCallback(onExiting as Function)
	const handleExited = normalizedTransitionCallback(onExited as Function)

	const handleEnter = normalizedTransitionCallback((node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' })
		node.style.webkitTransition = createTransition(['opacity', 'filter'], transitionProps)
		node.style.transition = createTransition(['opacity', 'filter'], transitionProps)

		onEnter?.(node, isAppearing)
	})

	const handleExit = normalizedTransitionCallback((node: HTMLElement) => {
		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' })
		node.style.webkitTransition = createTransition(['opacity', 'filter'], transitionProps)
		node.style.transition = createTransition(['opacity', 'filter'], transitionProps)

		onExit?.(node)
	})

	const handleAddEnd = (next: () => void) => {
		if (nodeRef.current) {
			addEndListener?.(nodeRef.current, next)
		}
	}

	return (
		<Transition
			in={inProp}
			appear={appear}
			nodeRef={nodeRef}
			onExit={handleExit}
			onEnter={handleEnter}
			addEndListener={handleAddEnd}
			onEntering={handleEntering}
			onEntered={handleEntered}
			onExiting={handleExiting}
			onExited={handleExited}
			timeout={timeout}
			{...other}
		>
			{state =>
				cloneElement(children, {
					ref: handleRef,
					style: {
						opacity: 0,
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...getCSS(radius)[state],
						...style,
						...children.props.style
					}
				})
			}
		</Transition>
	)
})
