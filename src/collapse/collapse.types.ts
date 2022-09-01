import { ElementType } from 'react'
import { TransitionProps } from '../utils'

export interface CollapseProps extends Omit<TransitionProps, 'timeout'> {
	/**
	 * The content node to be collapsed.
	 */
	children: JSX.Element
	/**
	 * The width (horizontal) or height (vertical) of the container when collapsed.
	 * @default '0px'
	 */
	collapsedSize?: string | number
	/**
	 * The component used for the root node.
	 * Either a string to use a HTML element or a component.
	 */
	component?: ElementType<TransitionProps>
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
	 * @default duration.standard
	 */
	timeout?: TransitionProps['timeout'] | 'auto'
}
