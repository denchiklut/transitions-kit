import { Story } from '@storybook/react'
import { Collapse, type CollapseProps } from './index'

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
	timeout: 500,
	children: (
		<div style={{ width: 200 }}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
			dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
			porro possimus recusandae repellat sequi similique.
		</div>
	)
}
