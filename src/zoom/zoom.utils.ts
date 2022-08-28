import { CSSProperties } from 'react'
import { TransitionStatus } from 'react-transition-group'

export const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: {
		transform: 'none'
	},
	entered: {
		transform: 'none'
	}
}
