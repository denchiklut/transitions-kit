import { Children, FC } from 'react'
import { Summary, Details, Icon, Wrapper } from './styles'
import { Collapse } from 'transitions-kit'

interface Props {
	expanded?: boolean
	children: JSX.Element[]
	onChange?: (newExpanded: boolean) => void
}
export const Accordion: FC<Props> = ({ children: childrenProp, expanded = false, onChange }) => {
	const [summary, ...children] = Children.toArray(childrenProp)

	const handleChange = () => onChange?.(!expanded)

	return (
		<Wrapper>
			<Summary onClick={handleChange}>
				<Icon expanded={expanded} className='material-symbols-rounded'>
					arrow_forward_ios
				</Icon>
				{summary}
			</Summary>

			<Collapse in={expanded} timeout='auto'>
				<Details>{children}</Details>
			</Collapse>
		</Wrapper>
	)
}
