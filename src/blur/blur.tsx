import { type FC, type CSSProperties, cloneElement } from 'react'
import { Transition, type TransitionStatus } from 'react-transition-group'
import { createTransition, reflow } from '../utils'
import { BlurProps } from './blur.types'

const getCSS = (radius: number): Partial<Record<TransitionStatus, CSSProperties>> => ({
	entering: { opacity: 1, filter: 'blur(0)' },
	entered: { opacity: 1, filter: 'blur(0)' },
	exiting: { opacity: 0, filter: `blur(${radius}px)` },
	exited: { opacity: 0, filter: `blur(${radius}px)` }
})

export const Blur: FC<BlurProps> = ({
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
}) => {
	const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
		reflow(node)

		node.style.webkitTransition = createTransition(['opacity', 'filter'], { duration: timeout })
		node.style.transition = createTransition(['opacity', 'filter'], { duration: timeout })

		onEnter?.(node, isAppearing)
	}

	const handleExit = (node: HTMLElement) => {
		node.style.webkitTransition = createTransition(['opacity', 'filter'], { duration: timeout })
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
}
