import { cloneElement, forwardRef } from 'react'
import { Transition } from 'react-transition-group'
import { createTransition, duration, getTransitionProps, reflow, useForkRef } from '../utils'
import { ZoomProps } from './zoom.types'
import { styles } from './zoom.utils'

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

	const handleRef = useForkRef(children.ref, ref)

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' })
		node.style.webkitTransition = createTransition('transform', transitionProps)
		node.style.transition = createTransition('transform', transitionProps)

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' })
		node.style.webkitTransition = createTransition('transform', transitionProps)
		node.style.transition = createTransition('transform', transitionProps)

		onExit?.(node)
	}

	const handleAddEndListener = (node: HTMLElement, next: () => void) => {
		addEndListener?.(node, next)
	}

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
			timeout={timeout}
			{...other}
		>
			{state =>
				cloneElement(children, {
					ref: handleRef,
					style: {
						transform: 'scale(0)',
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
