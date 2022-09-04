import type { FC, ChangeEvent } from 'react'
import { Input, Slider, Wrapper, Toggle } from './switch.styles'

interface Props {
	label?: string
	labelPlacement?: 'start' | 'end'
	checked: boolean
	onChange: (v: boolean) => void
}
export const Switch: FC<Props> = ({ label, labelPlacement = 'end', checked, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked)
	}

	return (
		<Wrapper labelPlacement={labelPlacement}>
			<span>{label}</span>

			<Toggle>
				<Input type='checkbox' checked={checked} onChange={handleChange} />
				<Slider />
			</Toggle>
		</Wrapper>
	)
}
