import {
	TransitionProps as _TransitionProps,
	TransitionActions
} from 'react-transition-group/Transition'
import { HTMLAttributes, Ref } from 'react'

export type TransitionHandlerKeys =
	| 'onEnter'
	| 'onEntering'
	| 'onEntered'
	| 'onExit'
	| 'onExiting'
	| 'onExited'

export type TransitionHandlerProps = Pick<_TransitionProps, TransitionHandlerKeys>

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
		HTMLAttributes<HTMLElement> {}

export type ElementWithRef = JSX.Element & { ref?: Ref<unknown> }
