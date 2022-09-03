import { Story } from '@storybook/react'
import { Zoom, type ZoomProps } from 'transitions-kit'

export default {
	component: Zoom,
	title: 'Transitions/Zoom'
}

const Template: Story<ZoomProps> = props => <Zoom {...props} />

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Zoom in={open} timeout={500}>
  <div style={{ 
      width: 250, 
      height: 250, 
      background: 'linear-gradient(to right, #ff7e5f, #feb47b)'
    }}
  />
</Zoom>`
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
				background: 'linear-gradient(to right, #ff7e5f, #feb47b)'
			}}
		/>
	)
}
