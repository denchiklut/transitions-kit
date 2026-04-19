import { type CSSProperties, cloneElement, forwardRef, useRef } from 'react'
import type { ReactElement } from 'react'
import { Transition } from 'react-transition-group'

import {
	createTransition,
	duration,
	type ElementWithRef,
	getTransitionProps,
	reflow,
	useForkRef
} from '../utils'
import type { ZoomProps } from './zoom.types'
import { styles } from './zoom.utils'

type ChildElement = ReactElement<{ style?: CSSProperties; [key: string]: unknown }>

export const Zoom = forwardRef((props: ZoomProps, ref) => {
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

	const handleEntered = normalizedTransitionCallback(onEntered as Function)
	const handleEntering = normalizedTransitionCallback(onEntering as Function)
	const handleExited = normalizedTransitionCallback(onExited as Function)
	const handleExiting = normalizedTransitionCallback(onExiting as Function)

	const handleEnter = normalizedTransitionCallback((node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' })
		node.style.webkitTransition = createTransition('transform', transitionProps)
		node.style.transition = createTransition('transform', transitionProps)

		onEnter?.(node, isAppearing)
	})

	const handleExit = normalizedTransitionCallback((node: HTMLElement) => {
		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' })
		node.style.webkitTransition = createTransition('transform', transitionProps)
		node.style.transition = createTransition('transform', transitionProps)

		onExit?.(node)
	})

	const handleAddEndListener = (next: () => void) => {
		if (nodeRef.current) {
			addEndListener?.(nodeRef.current, next)
		}
	}

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
			timeout={timeout}
			{...other}
		>
			{state =>
				cloneElement(children as ChildElement, {
					ref: handleRef,
					style: {
						transform: 'scale(0)',
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...styles[state],
						...style,
						...(children as ChildElement).props.style
					}
				})
			}
		</Transition>
	)
})
