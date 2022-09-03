import { Story } from '@storybook/react'
import { Grow, type GrowProps } from 'transitions-kit'

export default {
	component: Grow,
	title: 'Transitions/Grow'
}

const Template: Story<GrowProps> = props => <Grow {...props} />

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Grow in={open} timeout={500}>
  <div style={{ 
      width: 250, 
      height: 250, 
      background: 'linear-gradient(to right, #ff9966, #ff5e62)'
    }}
  />
</Grow>`
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
				background: 'linear-gradient(to right, #ff9966, #ff5e62)'
			}}
		/>
	)
}
