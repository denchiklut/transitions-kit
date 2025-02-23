import { Children, type FC } from 'react'
import { Summary, Details, Icon, Wrapper } from './styles'
import { Collapse } from 'transitions-kit'

export interface Props {
	expanded?: boolean
	children: JSX.Element[]
	onChange?: (newExpanded: boolean) => void
}
export const Accordion: FC<Props> = ({ children: childrenProp, expanded = false, onChange }) => {
	const [summary, ...children] = Children.toArray(childrenProp)

	return (
		<Wrapper>
			<Summary onClick={() => onChange?.(!expanded)}>
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
