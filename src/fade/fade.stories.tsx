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
  <div style={{ 
      width: 250, 
      height: 250, 
      background: '#222'
    }}
  />
</Fade>`
		}
	}
}
Basic.args = {
	timeout: 1000,
	mountOnEnter: true,
	unmountOnExit: true,
	children: (
		<div
			style={{
				width: 250,
				height: 250,
				background: '#222'
			}}
		/>
	)
}
