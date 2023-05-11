import type { CSSProperties } from 'react'
import type { TransitionStatus } from 'react-transition-group'

export const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
	entering: {
		opacity: 1,
		transform: 'scale(1)'
	},
	entered: {
		opacity: 1,
		transform: 'none'
	}
}

/*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */
export const isWebKit154 =
	typeof navigator !== 'undefined' &&
	/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
	/(os |version\/)15(.|_)4/i.test(navigator.userAgent)
