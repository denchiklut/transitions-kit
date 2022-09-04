import styled from '@emotion/styled'

export const Toggle = styled.span`
	position: relative;
	display: inline-block;
	width: 42px;
	height: 26px;
	box-sizing: border-box;
`

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 26px;
	background-color: #ccc;
	transition-duration: 300ms;
	box-sizing: border-box;
	:before {
		position: absolute;
		content: '';
		height: 22px;
		width: 22px;
		left: 2px;
		bottom: 2px;
		border-radius: 22px;
		background-color: white;
		transition-duration: 300ms;
		box-shadow: 0 2px 1px -1px rgb(0 0 0 / 10%);
	}
`

interface Props {
	labelPlacement: 'start' | 'end'
}
export const Wrapper = styled.label`
	gap: 12px;
	cursor: pointer;
	align-items: center;
	justify-self: start;
	display: inline-flex;
	-webkit-tap-highlight-color: transparent;
	flex-direction: ${({ labelPlacement }: Props) =>
		labelPlacement === 'start' ? 'row' : 'row-reverse'};
`

export const Input = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
	:checked + ${Slider} {
		background-color: #65c565;
		:before {
			transform: translateX(16px);
		}
	}
`
