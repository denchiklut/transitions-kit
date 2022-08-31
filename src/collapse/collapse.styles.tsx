import { TransitionStatus } from 'react-transition-group'
import { FC, Ref, CSSProperties, forwardRef } from 'react'
import { createTransition } from '../utils'

interface Props {
	ref?: Ref<HTMLDivElement | null>
	ownerState: {
		in?: boolean
		orientation: 'horizontal' | 'vertical'
		collapsedSize: string | number
		state: TransitionStatus
	}
	style?: CSSProperties
	children: JSX.Element
}

export const CollapseRoot = forwardRef(({ children, ownerState, style = {} }: Props, ref) => (
	<div
		ref={ref as Ref<HTMLDivElement>}
		style={{
			...style,
			height: 0,
			overflow: 'hidden',
			transition: createTransition('height'),
			...(ownerState.orientation === 'horizontal' && {
				height: 'auto',
				width: 0,
				transition: createTransition('width')
			}),
			...(ownerState.state === 'entered' && {
				height: 'auto',
				overflow: 'visible',
				...(ownerState.orientation === 'horizontal' && {
					width: 'auto'
				})
			}),
			...(ownerState.state === 'exited' &&
				!ownerState.in &&
				ownerState.collapsedSize === '0px' && {
					visibility: 'hidden'
				})
		}}
	>
		{children}
	</div>
))

export const CollapseWrapper = forwardRef(({ children, ownerState, style }: Props, ref) => (
	<div
		ref={ref as Ref<HTMLDivElement>}
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
