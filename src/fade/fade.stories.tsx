import { Story } from '@storybook/react'
import { Fade, type FadeProps } from './index'
import { useState } from 'react'

export default {
	component: Fade,
	title: 'Transitions/Fade'
}

const Template: Story<FadeProps> = ({ in: inProp, ...props }) => {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<button onClick={() => setOpen(!open)}>{open ? 'close' : 'open'}</button>
			<Fade in={open} {...props} />
		</div>
	)
}

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Fade in={open} timeout={500}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
    dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
    porro possimus recusandae repellat sequi similique.
  </p>
</Fade>`
		}
	}
}
Basic.args = {
	timeout: 500,
	children: (
		<div style={{ width: 200 }}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
			dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
			porro possimus recusandae repellat sequi similique.
		</div>
	)
}
