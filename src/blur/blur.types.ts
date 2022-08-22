export interface BlurProps {
	in: boolean
	timeout?: number
	unmountOnExit?: boolean
	mountOnEnter?: boolean
	children: JSX.Element
	radius?: number
}
