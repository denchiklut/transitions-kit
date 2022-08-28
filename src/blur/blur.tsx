import { cloneElement, forwardRef } from 'react'
import { Transition } from 'react-transition-group'
import { createTransition, reflow, useForkRef } from '../utils'
import { BlurProps } from './blur.types'
import { getCSS } from './blur.utils'

export const Blur = forwardRef((props: BlurProps, ref) => {
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
		timeout,
		...other
	} = props
	const handleRef = useForkRef(children.ref, ref)

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		node.style.webkitTransition = createTransition(['opacity', 'filter'], {
			duration: timeout
		})
		node.style.transition = createTransition(['opacity', 'filter'], { duration: timeout })

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		node.style.webkitTransition = createTransition(['opacity', 'filter'], {
			duration: timeout
		})
		node.style.transition = createTransition(['opacity', 'filter'], { duration: timeout })

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
