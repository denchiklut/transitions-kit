export interface FadeProps {
	in: boolean
	timeout?: number
	children: JSX.Element
	unmountOnExit?: boolean
	mountOnEnter?: boolean
}
