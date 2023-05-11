import type { CSSProperties } from 'react'
import type { TransitionStatus } from 'react-transition-group'

export const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: {
		transform: 'none'
	},
	entered: {
		transform: 'none'
	}
}
