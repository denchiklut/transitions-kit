import { useState } from 'react'
import { Story } from '@storybook/react'
import { Grow, type GrowProps } from 'transitions-kit'
import image from '../../../../assets/thumbnail.jpeg'
import { Wrapper, Image } from './grow.styles'
import { Switch } from '../switch'

export default {
	component: Grow,
	title: 'Transitions/Grow',
	argTypes: {
		in: {
			type: { name: 'boolean', required: true },
			description: 'If `true`, the component will transition in.'
		},
		appear: {
			description: 'By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ',
			defaultValue: { summary: false }
		},
		children: {
			type: { required: true },
			description: 'The content node to be collapsed.',
		},
		easing: {
			description: 'The transition timing function.\n	 * You may specify a single easing or a object containing enter and exit values.',
			type: { name: 'string'},
		},
		timeout:{
			description: 'The duration for the transition, in milliseconds.\n	 * You may specify a single timeout for all transitions, or individually with an object.',
			defaultValue: { summary: `{ enter: 225, exit: 195 }` },
		},
		mountOnEnter: {
			type: { name: 'boolean', required: false },
			description: 'By default the child component is mounted immediately along with the parent Transition component. \n	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.',
			table: { defaultValue: { summary: 'false' } },
		},
		unmountOnExit: {
			type: { name: 'boolean', required: false },
			description: 'By default the child component stays mounted after it reaches the \'exited\' state.\n	* Set unmountOnExit if you\'d prefer to unmount the component after it finishes exiting.',
			table: { defaultValue: { summary: 'false' } },
		},
	}
}

const Template: Story<GrowProps> = ({  in: inProp, children, ...props }) => {
	const [open, setOpen] = useState(true)

	return (
		<Wrapper>
			<Switch label='Show' checked={open} onChange={setOpen} />

			<Grow in={open} { ...props }>
				<Image src={image}/>
			</Grow>
		</Wrapper>
	)
}

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<Grow in={open}>
  {content}
</Grow>`
		}
	}
}

Basic.args = {
	timeout: 500
}
