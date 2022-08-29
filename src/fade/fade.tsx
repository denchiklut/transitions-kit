import { cloneElement, CSSProperties, forwardRef } from 'react'
import { Transition, TransitionStatus } from 'react-transition-group'
import {
	duration,
	ElementWithRef,
	createTransition,
	getTransitionProps,
	useForkRef,
	reflow
} from '../utils'
import { FadeProps } from './fade.types'

const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: { opacity: 1 },
	entered: { opacity: 1 }
}

export const Fade = forwardRef((props: FadeProps, ref) => {
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

	const handleRef = useForkRef((children as ElementWithRef).ref, ref)

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' })
		node.style.webkitTransition = createTransition('opacity', transitionProps)
		node.style.transition = createTransition('opacity', transitionProps)

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' })
		node.style.webkitTransition = createTransition('opacity', transitionProps)
		node.style.transition = createTransition('opacity', transitionProps)

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
						...styles[state],
						...style,
						...children.props.style
					}
				})
			}
		</Transition>
	)
})
