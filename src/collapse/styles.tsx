import type { FC, LegacyRef, CSSProperties, MutableRefObject } from 'react'
import { TransitionStatus } from 'react-transition-group'
import { createTransition } from '../utils'
import { forwardRef } from 'react'

interface Props {
	ref?: MutableRefObject<HTMLDivElement | null>
	ownerState: {
		in?: boolean
		orientation: 'horizontal' | 'vertical'
		collapsedSize: string | number
		state: TransitionStatus
	}
	style?: CSSProperties
	children: JSX.Element
}

export const CollapseRoot: FC<Props> = ({ children, ownerState, style = {} }) => (
	<div
		style={{
			height: 0,
			overflow: 'hidden',
			transition: createTransition('height'),
			...(ownerState.orientation === 'horizontal' && {
				height: 'auto',
				width: 0,
				transition: createTransition('width')
			}),
			...style
		}}
	>
		{children}
	</div>
)

export const CollapseWrapper = forwardRef(({ children, ownerState, style }: Props, ref) => (
	<div
		ref={ref as MutableRefObject<HTMLDivElement>}
		style={{
			display: 'flex',
			width: '100%',
			...(ownerState.orientation === 'horizontal' && {
				width: 'auto',
				height: '100%'
			})
		}}
	>
		{children}
	</div>
))

export const CollapseWrapperInner: FC<Props> = ({ children, ownerState }) => (
	<div
		style={{
			width: '100%',
			...(ownerState.orientation === 'horizontal' && {
				width: 'auto',
				height: '100%'
			})
		}}
	>
		{children}
	</div>
)
