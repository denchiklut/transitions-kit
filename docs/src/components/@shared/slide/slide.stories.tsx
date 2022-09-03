import { Story } from '@storybook/react'
import { Slide, type SlideProps } from 'transitions-kit'

export default {
	component: Slide,
	title: 'Transitions/Slide',
	argTypes: {
		easing: {
			control: false,
			table: {
				disable: true
			}
		}
	}
}

const Template: Story<SlideProps> = props => <Slide {...props} />

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Slide direction="up" in={checked} mountOnEnter unmountOnExit>
  <div style={{ 
      width: 250, 
      height: 250, 
      background: 'linear-gradient(to right, #ff5f6d, #ffc371)'
    }}
  />
</Slide>`
		}
	}
}
Basic.args = {
	in: true,
	timeout: 500,
	direction: 'up',
	mountOnEnter: true,
	unmountOnExit: true,
	children: (
		<div
			style={{
				width: 250,
				height: 250,
				borderRadius: 4,
				background: 'linear-gradient(to right, #ff5f6d, #ffc371)'
			}}
		/>
	)
}
