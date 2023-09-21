import { useState } from 'react'
import type { StoryFn } from '@storybook/react'
import { Blur, type BlurProps } from 'transitions-kit'
import image from '../../../../assets/thumbnail.jpeg'
import { Wrapper } from './blur.styles'
import { Switch } from '../switch'

export default {
	component: Blur,
	title: 'Transitions/Blur',
	argTypes: {
		in: {
			type: { name: 'boolean', required: true },
			description: 'If `true`, the component will transition in.'
		},
		appear: {
			description:
				'By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ',
			defaultValue: { summary: false }
		},
		children: {
			type: { required: true },
			description: 'The content node to be collapsed.'
		},
		easing: {
			description:
				'The transition timing function.\n	 * You may specify a single easing or a object containing enter and exit values.',
			type: { name: 'string' }
		},
		radius: {
			description: 'The blur radius in `px`',
			defaultValue: { summary: 25 },
			type: { name: 'number' }
		},
		timeout: {
			description:
				'The duration for the transition, in milliseconds.\n	 * You may specify a single timeout for all transitions, or individually with an object.',
			defaultValue: { summary: `{ enter: 225, exit: 195 }` }
		},
		mountOnEnter: {
			type: { name: 'boolean', required: false },
			description:
				'By default the child component is mounted immediately along with the parent Transition component. \n	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.',
			table: { defaultValue: { summary: 'false' } }
		},
		unmountOnExit: {
			type: { name: 'boolean', required: false },
			description:
				"By default the child component stays mounted after it reaches the 'exited' state.\n	* Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.",
			table: { defaultValue: { summary: 'false' } }
		}
	}
}

const Template: StoryFn<BlurProps> = ({ in: inProp, children, ...props }) => {
	const [open, setOpen] = useState(true)

	return (
		<Wrapper>
			<Switch label='Show' checked={open} onChange={setOpen} />

			<Blur in={open} {...props}>
				<img
					alt='demo'
					style={{ width: 250, height: 250, borderRadius: 4, objectFit: 'cover' }}
					src={image}
				/>
			</Blur>
		</Wrapper>
	)
}

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
	radius: 15,
	timeout: 500,
	appear: false
}
