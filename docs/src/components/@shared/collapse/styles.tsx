import styled from '@emotion/styled'

export const Box = styled('div')({
	margin: 12,
	padding: 8,
	width: 116,
	height: 120,
	fontSize: 16,
	borderRadius: 5,
	background: '#7f7f7f',
	boxSizing: 'border-box',
	boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
	position: 'relative'
})

export const Row = styled.div`
	display: grid;
	height: 145px;
	margin-left: -10px;
	grid-template-columns: 145px 145px;
`

export const Icon = () => (
	<svg style={{ width: '100px', height: '100px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset', fill: '#cec6e4'}}>
		<polygon points='0,100 50,00, 100,100' />
	</svg>
)

export const Content = () => (
	<Box>
		<Icon />
	</Box>
)
