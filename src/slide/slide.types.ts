import { ReactElement, Ref } from 'react'
import { TransitionProps } from '../utils'

export interface SlideProps extends TransitionProps {
	/**
	 * Perform the enter transition when it first mounts if `in` is also `true`.
	 * Set this to `false` to disable this behavior.
	 * @default true
	 */
	appear?: boolean
	/**
	 * A single child content element.
	 */
	children: ReactElement<any, any>
	/**
	 * An HTML element, or a function that returns one.
	 * It's used to set the container the Slide is transitioning from.
	 */
	container?: null | Element | ((element: Element) => Element)
	/**
	 * Direction the child node will enter from.
	 * @default 'down'
	 */
	direction?: 'left' | 'right' | 'up' | 'down'
	/**
	 * The transition timing function.
	 * You may specify a single easing or a object containing enter and exit values.
	 * @default {
	 *   enter: theme.transitions.easing.easeOut,
	 *   exit: theme.transitions.easing.sharp,
	 * }
	 */
	easing?: TransitionProps['easing']
	/**
	 * If `true`, the component will transition in.
	 */
	in?: TransitionProps['in']
	ref?: Ref<unknown>
	/**
	 * The duration for the transition, in milliseconds.
	 */
	timeout?: number
}
