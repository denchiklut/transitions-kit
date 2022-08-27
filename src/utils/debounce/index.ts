export const debounce = (func: Function, wait = 166) => {
	let timeout: NodeJS.Timeout

	function debounced(...args: unknown[]) {
		const later = () => {
			// @ts-ignore
			func.apply(this as any, args)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}

	debounced.clear = () => {
		clearTimeout(timeout)
	}

	return debounced
}
