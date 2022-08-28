import { cloneElement, forwardRef } from 'react'
import { Transition } from 'react-transition-group'
import { createTransition, duration, getTransitionProps, reflow, useForkRef } from '../utils'
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
	const handleRef = useForkRef(children.ref, ref)

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' })
		node.style.webkitTransition = createTransition(['opacity', 'filter'], transitionProps)
		node.style.transition = createTransition(['opacity', 'filter'], transitionProps)

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' })
		node.style.webkitTransition = createTransition(['opacity', 'filter'], transitionProps)
		node.style.transition = createTransition(['opacity', 'filter'], transitionProps)

		onExit?.(node)
	}

	const handleAddEnd = (node: HTMLElement, next: () => void) => {
		addEndListener?.(node, next)
	}

	return (
		<Transition
			in={inProp}
			appear={appear}
			onExit={handleExit}
			onEnter={handleEnter}
			addEndListener={handleAddEnd}
			onEntering={onEntering}
			onEntered={onEntered}
			onExiting={onExiting}
			onExited={onExited}
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
