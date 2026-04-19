export const debounce = (func: Function, wait = 166) => {
	let timeout: number

	function debounced(this: unknown, ...args: unknown[]) {
		const later = () => {
			func.apply(this, args)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}

	debounced.clear = () => {
		clearTimeout(timeout)
	}

	return debounced
}
