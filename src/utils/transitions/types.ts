import { CSSProperties } from 'react'

export interface ComponentProps {
	style: CSSProperties | undefined
	easing: string | { enter?: string; exit?: string } | undefined
	timeout: number | string | { enter?: number; exit?: number }
}

export interface Options {
	mode: 'enter' | 'exit'
}

export interface TransitionProps {
	duration: string | number
	easing: string | undefined
	delay: string | undefined
}
