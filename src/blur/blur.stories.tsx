import { Story } from '@storybook/react'
import { Blur, type BlurProps } from './index'
import image from './thumbnail.jpeg'

export default {
	component: Blur,
	title: 'Transitions/Blur'
}

const Template: Story<BlurProps> = props => <Blur {...props} />

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Blur in={open} radius={15}>
  <img src='https://picsum.photos/400' />
</Blur>`
		}
	}
}
Basic.args = {
	in: true,
	radius: 15,
	timeout: 500,
	appear: false,
	unmountOnExit: true,
	mountOnEnter: true,
	children: (
		<img
			alt='demo'
			style={{ width: 250, height: 250, borderRadius: 4, objectFit: 'cover' }}
			src={image}
		/>
	)
}
