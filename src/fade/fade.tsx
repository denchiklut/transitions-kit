import { type FC, type CSSProperties, cloneElement } from 'react'
import { Transition, type TransitionStatus } from 'react-transition-group'
import { createTransition } from '../utils'
import { FadeProps } from './fade.types'

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
}

export const Fade: FC<FadeProps> = ({ in: inProp, timeout = 300, children, ...props }) => (
	<Transition in={inProp} timeout={timeout} {...props}>
		{state =>
			cloneElement(children, {
				style: {
					opacity: 0,
					transition: createTransition('opacity', { duration: timeout }),
					...children.props.style,
					...transitionStyles[state]
				}
			})
		}
	</Transition>
)