import type { ComponentProps, TransitionProps, Options } from './types'
import { duration, easing } from './consts'

export function getTransitionProps(props: ComponentProps, options: Options): TransitionProps {
	const { timeout, easing, style = {} } = props

	return {
		duration:
			style.transitionDuration ??
			(typeof timeout === 'number' || typeof timeout === 'string'
				? timeout
				: timeout[options.mode] || 0),
		easing:
			style.transitionTimingFunction ??
			(typeof easing === 'object' ? easing[options.mode] : easing),
		delay: style.transitionDelay
	}
}

export const createTransition = (
	props: string | string[] = ['all'],
	options: Partial<{ duration: number | string; easing: string; delay: number | string }> = {}
) => {
	const {
		duration: durationOption = duration.standard,
		easing: easingOption = easing.easeInOut,
		delay = 0
	} = options

	const formatMs = (milliseconds: number) => `${Math.round(milliseconds)}ms`

	return (Array.isArray(props) ? props : [props])
		.map(
			animatedProp =>
				`${animatedProp} ${
					typeof durationOption === 'string' ? durationOption : formatMs(durationOption)
				} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`
		)
		.join(',')
}

export const getAutoHeightDuration = (height: number) => {
	if (!height) return 0

	const constant = height / 36

	return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10)
}
