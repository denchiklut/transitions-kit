import { useState } from 'react'
import { Story } from '@storybook/react'
import { Collapse, type CollapseProps } from 'transitions-kit'
import { Row, Content } from './styles'
import { Switch } from '../switch'


export default {
	component: Collapse,
	title: 'Transitions/Collapse',
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
		collapsedSize: {
			description: 'The width (horizontal) or height (vertical) of the container when collapsed.',
			defaultValue: { summary: '0px' }
		},
		orientation: {
			description: 'The transition orientation.',
			options: ['vertical', 'horizontal'],
			defaultValue: { summary: 'vertical' },
			control: { type: 'radio' }
		},
		easing: {
			description: 'The transition timing function.\n	 * You may specify a single easing or a object containing enter and exit values.',
			type: { name: 'string'},
		},
		timeout:{
			description: 'The duration for the transition, in milliseconds.\n	 * You may specify a single timeout for all transitions, or individually with an object. \n	 * Set to \'auto\' to automatically calculate transition time based on height.',
			defaultValue: { summary: 300 },
		},
		mountOnEnter: {
			type: { name: 'boolean', required: false },
			description: 'By default the child component is mounted immediately along with the parent Transition component. \n	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.',
			table: { defaultValue: { summary: 'false' } },
		},
		unmountOnExit: {
			type: { name: 'boolean', required: false },
			description: 'By default the child component stays mounted after it reaches the \'exited\' state.\n	* Set unmountOnExit if you\'d prefer to unmount the component after it finishes exiting.',
			table: { defaultValue: { summary: 'false' } }
		},
	}
}

const Template: Story<CollapseProps> = ({ in: inProp, collapsedSize, orientation, children, ...props}) => {
	const [open, setOpen] = useState(true)

	return (
		<>
			<Switch label='Show' checked={open} onChange={setOpen} />

			<div style={{height: 10}}/>

			<Row>
				<Collapse in={open} { ...props }>
					<Content />
				</Collapse>

				<Collapse in={open} collapsedSize={69} { ...props }>
					<Content />
				</Collapse>
			</Row>

			<Row>
				<Collapse in={open} orientation='horizontal' { ...props }>
					<Content />
				</Collapse>

				<Collapse in={open} orientation='horizontal' collapsedSize={67} { ...props }>
					<Content />
				</Collapse>
			</Row>
		</>
	)
}


export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<div>
  <Collapse in={open}>{content}</Collapse>
  
  <Collapse in={open} collapsedSize={69}>
    {content}
  </Collapse>
  
  <Collapse in={open} orientation='horizontal'>
    {content}
  </Collapse>
  
  <Collapse in={open} orientation='horizontal' collapsedSize={67}>
    {content}
  </Collapse>
</div>
`
		}
	}
}

Basic.args = {
	appear: false,
	timeout: 500
}

