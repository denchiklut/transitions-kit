export interface CollapseProps {
	in: boolean
	children: JSX.Element
	orientation?: 'horizontal' | 'vertical'
	collapsedSize?: number | string
	timeout?: number
	unmountOnExit?: boolean
}
