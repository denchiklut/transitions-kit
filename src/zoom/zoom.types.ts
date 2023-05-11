import type { TransitionProps } from '../utils'

export interface ZoomProps extends TransitionProps {
	/**
	 * Perform the enter transition when it first mounts if `in` is also `true`.
	 * Set this to `false` to disable this behavior.
	 * @default true
	 */
	appear?: boolean
	/**
	 * The transition timing function.
	 * You may specify a single easing or a object containing enter and exit values.
	 */
	easing?: TransitionProps['easing']
	/**
	 * If `true`, the component will transition in.
	 */
	in?: boolean
	/**
	 * The duration for the transition, in milliseconds.
	 * You may specify a single timeout for all transitions, or individually with an object.
	 * @default {
	 *   enter: 225,
	 *   exit: 195
	 * }
	 */
	timeout?: TransitionProps['timeout']
}
