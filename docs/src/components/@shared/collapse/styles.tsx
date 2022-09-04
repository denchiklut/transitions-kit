import styled from '@emotion/styled'

export const Box = styled.div`
	margin: 12px;
	padding: 8px;
	width: 116px;
	height: 120px;
	font-size: 16px;
	border-radius: 5px;
	background: #7f7f7f;
	box-sizing: border-box;
	box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	position: relative;
`

export const Row = styled.div`
	display: grid;
	height: 145px;
	margin-left: -10px;
	grid-template-columns: 145px 145px;
`

const Svg = styled.svg`
	width: 100%;
	height: 100%;
	fill: #cec6e4;
	box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`

export const Icon = () => (
	<Svg>
		<polygon points='0,100 50,00, 100,100' />
	</Svg>
)

export const Content = () => (
	<Box>
		<Icon />
	</Box>
)
