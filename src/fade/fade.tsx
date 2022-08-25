import { cloneElement, forwardRef, useRef } from 'react'
import { reflow, getTransitionProps } from '../utils'
import { Transition } from 'react-transition-group'
import { createTransition } from '../utils'
import useForkRef from '../utils/ref'

const styles = {
	entering: {
		opacity: 1
	},
	entered: {
		opacity: 1
	}
}

export const Fade = forwardRef((props: any, ref) => {
	const defaultTimeout = {
		enter: 225,
		exit: 195
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

	const enableStrictModeCompat = true
	const nodeRef = useRef(null)
	const foreignRef = useForkRef(children.ref, ref)
	const handleRef = useForkRef(nodeRef, foreignRef)

	const normalizedTransitionCallback = callback => maybeIsAppearing => {
		if (callback) {
			const node = nodeRef.current

			// onEnterXxx and onExitXxx callbacks have a different arguments.length value.
			if (maybeIsAppearing === undefined) {
				callback(node)
			} else {
				callback(node, maybeIsAppearing)
			}
		}
	}

	// const handleEntering = normalizedTransitionCallback(onEntering)

	const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
		reflow(node) // So the animation always start from the start.

		const transitionProps = getTransitionProps(
			{ style, timeout, easing },
			{
				mode: 'enter'
			}
		)

		// node.style.webkitTransition = theme.transitions.create('opacity', transitionProps)
		node.style.webkitTransition = createTransition('opacity', { duration: timeout })
		node.style.transition = createTransition('opacity', { duration: timeout })

		if (onEnter) {
			onEnter(node, isAppearing)
		}
	})

	// const handleEntered = normalizedTransitionCallback(onEntered)

	// const handleExiting = normalizedTransitionCallback(onExiting)

	const handleExit = normalizedTransitionCallback(node => {
		const transitionProps = getTransitionProps(
			{ style, timeout, easing },
			{
				mode: 'exit'
			}
		)

		node.style.webkitTransition = createTransition('opacity', { duration: timeout })
		node.style.transition = createTransition('opacity', { duration: timeout })

		if (onExit) {
			onExit(node)
		}
	})

	const handleExited = normalizedTransitionCallback(onExited)

	const handleAddEndListener = next => {
		if (addEndListener) {
			// Old call signature before `react-transition-group` implemented `nodeRef`
			addEndListener(nodeRef.current, next)
		}
	}

	return (
		<Transition
			appear={appear}
			in={inProp}
			nodeRef={enableStrictModeCompat ? nodeRef : undefined}
			onEnter={handleEnter}
			onEntered={onEntered}
			onEntering={onEntering}
			onExit={handleExit}
			onExited={handleExited}
			onExiting={onExiting}
			addEndListener={handleAddEndListener}
			timeout={timeout}
			{...other}
		>
			{state =>
				cloneElement(children, {
					style: {
						opacity: 0,
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...styles[state],
						...style,
						...children.props.style
					},
					ref: handleRef
				})
			}
		</Transition>
	)
})
