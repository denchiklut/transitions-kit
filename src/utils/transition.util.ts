interface Options {
	duration?: number
}
export const createTransition = (
	transition: string | string[],
	options: Options = { duration: 300 }
) => {
	const all = [transition].flat()
	const { duration } = options
	return all
		.map(transition => `${transition} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`)
		.join(', ')
}
