import type {
	TransitionProps as _TransitionProps,
	TransitionActions
} from 'react-transition-group/Transition'
import type { HTMLAttributes, ReactElement, Ref } from 'react'

export type TransitionHandlerKeys =
	| 'onEnter'
	| 'onEntering'
	| 'onEntered'
	| 'onExit'
	| 'onExiting'
	| 'onExited'

export type TransitionKeys =
	| 'in'
	| 'mountOnEnter'
	| 'unmountOnExit'
	| 'timeout'
	| 'easing'
	| 'addEndListener'
	| TransitionHandlerKeys

export interface TransitionProps
	extends TransitionActions,
		Partial<Pick<_TransitionProps, TransitionKeys>>,
		HTMLAttributes<HTMLElement> {
	/**
	 * A single child content element.
	 */
	children: ElementWithRef
}

export type ElementWithRef = ReactElement & { ref?: Ref<unknown> }
