import { Story } from '@storybook/react'
import { Blur, type BlurProps } from './index'
import { useState } from 'react'

export default {
	component: Blur,
	title: 'Transitions/Blur',
	argTypes: {
		in: {
			control: false
		}
	}
}

const Template: Story<BlurProps> = ({ in: inProp, ...props }) => {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<button onClick={() => setOpen(!open)}>{open ? 'close' : 'open'}</button>
			<Blur in={open} {...props} />
		</div>
	)
}

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Blur in={open} timeout={500}>
  <img src='https://picsum.photos/400' />
</Blur>`
		}
	}
}
Basic.args = {
	timeout: 500,
	children: (
		<img
			alt='demo'
			style={{ width: 350, height: 150, objectFit: 'cover' }}
			src='https://picsum.photos/400'
		/>
	)
}
