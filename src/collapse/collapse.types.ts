import type { TransitionProps } from '../utils'

export interface CollapseProps extends Omit<TransitionProps, 'timeout'> {
	/**
	 * The width (horizontal) or height (vertical) of the container when collapsed.
	 * @default '0px'
	 */
	collapsedSize?: string | number
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
	 * The transition orientation.
	 * @default 'vertical'
	 */
	orientation?: 'horizontal' | 'vertical'
	/**
	 * The duration for the transition, in milliseconds.
	 * You may specify a single timeout for all transitions, or individually with an object.
	 *
	 * Set to 'auto' to automatically calculate transition time based on height.
	 * @default 300ms
	 */
	timeout?: TransitionProps['timeout'] | 'auto'
}
