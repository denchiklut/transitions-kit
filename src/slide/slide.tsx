import { Transition } from 'react-transition-group'
import { cloneElement, forwardRef, useCallback, useEffect, useRef, FC } from 'react'
import { createTransition, useForkRef, ownerWindow, reflow, debounce } from '../utils'
import { setTranslateValue } from './slide.utils'
import { SlideProps } from './slide.types'

export const Slide: FC<SlideProps> = forwardRef((props, ref) => {
	const {
		addEndListener,
		appear = true,
		children,
		container: containerProp,
		direction = 'down',
		in: inProp,
		onEnter,
		onEntered,
		onEntering,
		onExit,
		onExited,
		onExiting,
		style,
		timeout = 500,
		...other
	} = props

	const childrenRef = useRef<HTMLElement | undefined>(undefined)
	// @ts-ignore
	const handleRefIntermediary = useForkRef(children.ref, childrenRef)
	const handleRef = useForkRef(handleRefIntermediary, ref)

	const normalizedTransitionCallback =
		(callback?: (node: HTMLElement, isAppearing: boolean) => void) =>
		(isAppearing?: boolean) => {
			if (callback) {
				callback(childrenRef.current!, !!isAppearing)
			}
		}

	const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
		setTranslateValue(direction, node, containerProp)
		reflow(node)

		onEnter?.(node, isAppearing)
	})

	const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
		node.style.webkitTransition = createTransition('-webkit-transform', {
			duration: timeout
		})

		node.style.transition = createTransition('transform', {
			duration: timeout
		})

		node.style.webkitTransform = 'none'
		node.style.transform = 'none'

		onEntering?.(node, isAppearing)
	})

	const handleEntered = normalizedTransitionCallback(onEntered)

	const handleExiting = normalizedTransitionCallback(onExiting)

	const handleExit = normalizedTransitionCallback(node => {
		node.style.webkitTransition = createTransition('-webkit-transform', { duration: timeout })
		node.style.transition = createTransition('transform', { duration: timeout })

		setTranslateValue(direction, node, containerProp)

		onExit?.(node)
	})

	const handleExited = normalizedTransitionCallback(node => {
		// No need for transitions when the component is hidden
		node.style.webkitTransition = ''
		node.style.transition = ''

		onExited?.(node)
	})

	const handleAddEndListener = (next: () => void) => {
		addEndListener?.(childrenRef.current!, next)
	}

	const updatePosition = useCallback(() => {
		if (childrenRef.current) {
			setTranslateValue(direction, childrenRef.current, containerProp)
		}
	}, [direction, containerProp])

	useEffect(() => {
		// Skip configuration where the position is screen size invariant.
		if (inProp || direction === 'down' || direction === 'right') {
			return undefined
		}

		const handleResize = debounce(() => {
			if (childrenRef.current) {
				setTranslateValue(direction, childrenRef.current, containerProp)
			}
		})

		const containerWindow = ownerWindow(childrenRef.current!)
		containerWindow.addEventListener('resize', handleResize)
		return () => {
			handleResize.clear()
			containerWindow.removeEventListener('resize', handleResize)
		}
	}, [direction, inProp, containerProp])

	useEffect(() => {
		if (!inProp) updatePosition()
	}, [inProp, updatePosition])

	return (
		<Transition
			in={inProp}
			appear={appear}
			timeout={timeout}
			ref={props.ref as any}
			nodeRef={childrenRef as any}
			onEnter={handleEnter}
			onEntered={handleEntered}
			onEntering={handleEntering}
			onExit={handleExit}
			onExited={handleExited}
			onExiting={handleExiting}
			addEndListener={handleAddEndListener}
			{...other}
		>
			{state =>
				cloneElement(children, {
					ref: handleRef,
					style: {
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...style,
						...children.props.style
					}
				})
			}
		</Transition>
	)
})
