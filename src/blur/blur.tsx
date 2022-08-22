import { type FC, type CSSProperties, cloneElement } from 'react'
import { Transition, type TransitionStatus } from 'react-transition-group'
import { createTransition } from '../utils'
import { BlurProps } from './blur.types'

const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: { opacity: 1, filter: 'blur(0)' },
	entered: { opacity: 1, filter: 'blur(0)' },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
}

export const Blur: FC<BlurProps> = ({
	in: inProp,
	timeout = 300,
	radius = 25,
	children,
	...props
}) => {
	const style: CSSProperties = {
		opacity: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		filter: `blur(${radius}px)`,
		transition: createTransition(['opacity', 'filter'], { duration: timeout })
	}

	return (
		<Transition in={inProp} timeout={timeout} {...props}>
			{(state: TransitionStatus) =>
				cloneElement(children, {
					style: {
						...style,
						...children.props.style,
						...styles[state]
					}
				})
			}
		</Transition>
	)
}
