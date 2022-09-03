import { Story } from '@storybook/react'
import { Collapse, type CollapseProps } from 'transitions-kit'

export default {
	component: Collapse,
	title: 'Transitions/Collapse'
}

const Template: Story<CollapseProps> = props => <Collapse {...props} />

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Collapse in={open} timeout={500}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
    dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
    porro possimus recusandae repellat sequi similique.
  </p>
</Collapse>`
		}
	}
}

Basic.args = {
	in: true,
	orientation: 'vertical',
	unmountOnExit: true,
	mountOnEnter: true,
	children: (
		<div
			style={{
				width: 200,
				padding: 8,
				borderRadius: 4,
				color: '#222',
				background: '#eee',
				border: '1px solid #d5d5d5'
			}}
		>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
			dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
			porro possimus recusandae repellat sequi similique.
		</div>
	)
}
