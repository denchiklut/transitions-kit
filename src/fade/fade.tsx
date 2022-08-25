import { cloneElement, FC, CSSProperties } from 'react'
import { Transition, TransitionStatus } from 'react-transition-group'
import { createTransition, reflow } from '../utils'
import { FadeProps } from './fade.types'

const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: { opacity: 1 },
	entered: { opacity: 1 }
}

export const Fade: FC<FadeProps> = props => {
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
		timeout,
		...other
	} = props

	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		node.style.webkitTransition = createTransition('opacity', { duration: timeout })
		node.style.transition = createTransition('opacity', { duration: timeout })

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		node.style.webkitTransition = createTransition('opacity', { duration: timeout })
		node.style.transition = createTransition('opacity', { duration: timeout })

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
}
