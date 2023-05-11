import type { CSSProperties } from 'react'
import type { TransitionStatus } from 'react-transition-group'

export const getCSS = (radius: number): Partial<Record<TransitionStatus, CSSProperties>> => ({
	entering: { opacity: 1, filter: 'blur(0)' },
	entered: { opacity: 1, filter: 'blur(0)' },
	exiting: { opacity: 0, filter: `blur(${radius}px)` },
	exited: { opacity: 0, filter: `blur(${radius}px)` }
})
