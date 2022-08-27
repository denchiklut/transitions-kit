import { Story } from '@storybook/react'
import { Fade, type FadeProps } from './index'

export default {
	component: Fade,
	title: 'Transitions/Fade',
	argTypes: {
		easing: {
			control: false,
			table: {
				disable: true
			}
		}
	}
}

const Template: Story<FadeProps> = props => <Fade {...props} />

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Fade in={open} timeout={500}>
  <div style={{ 
      width: 250, 
      height: 250, 
      background: 'linear-gradient(to right, #fc5c7d, #6a82fb)'
    }}
  />
</Fade>`
		}
	}
}
Basic.args = {
	in: true,
	timeout: 500,
	mountOnEnter: true,
	unmountOnExit: true,
	children: (
		<div
			style={{
				width: 250,
				height: 250,
				borderRadius: 4,
				background: 'linear-gradient(to right, #fc5c7d, #6a82fb)'
			}}
		/>
	)
}
