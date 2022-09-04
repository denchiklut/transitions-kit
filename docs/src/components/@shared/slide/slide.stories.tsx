import { Story } from '@storybook/react'
import { Slide, type SlideProps } from 'transitions-kit'
import image from '../../../../assets/thumbnail.jpeg'
import { Wrapper, Image } from './slide.styles'
import { Switch } from '../switch'
import { useRef, useState } from 'react'

export default {
	component: Slide,
	title: 'Transitions/Slide',
	argTypes: {
		in: {
			type: { name: 'boolean', required: true },
			description: 'If `true`, the component will transition in.'
		},
		appear: {
			description: 'By default the child component does not perform the enter transition when it first mounts, regardless of the value of in. If you want this behavior, set both appear and in to true. ',
			defaultValue: { summary: false }
		},
		direction: {
			description: 'Direction the child node will enter from.',
			options: ['left', 'right', 'up', 'down'],
			control: { type:'radio' }
		},
		container: {
		 	description: 'An HTML element, or a function that returns one.\n	 * It\'s used to set the container the Slide is transitioning from.'
		},
		children: {
			type: { required: true },
			description: 'The content node to be collapsed.'
		},
		easing: {
			description: 'The transition timing function.\n	 * You may specify a single easing or a object containing enter and exit values.',
			type: { name: 'string' }
		},
		timeout: {
			description: 'The duration for the transition, in milliseconds.\n	 * You may specify a single timeout for all transitions, or individually with an object.',
			defaultValue: { summary: `{ enter: 225, exit: 195 }` }
		},
		mountOnEnter: {
			type: { name: 'boolean', required: false },
			description: 'By default the child component is mounted immediately along with the parent Transition component. \n	* If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.',
			table: { defaultValue: {summary: 'false'} }
		},
		unmountOnExit: {
			type: { name: 'boolean', required: false },
			description: 'By default the child component stays mounted after it reaches the \'exited\' state.\n	* Set unmountOnExit if you\'d prefer to unmount the component after it finishes exiting.',
			table: { defaultValue: {summary: 'false'} }
		}
	}
}

const Template: Story<SlideProps> = ({ in: inProp, children, ...props }) => {
	const [open, setOpen] = useState(true)
	const ref = useRef<HTMLDivElement>(null)

	return (
		<Wrapper>
			<Switch label='Show' checked={open} onChange={setOpen}/>

			<div style={{ display: 'flex', gap: 20 }}>
				<Slide in={open} { ...props }>
					<Image src={image} width={250} height={250} />
				</Slide>

				<div>
					<p>Show from target</p>

					<div ref={ref} style={{ border: '1px solid', height: 200, width: 200, padding: 10, marginTop: 16,  overflow: 'hidden'}}>
						<Slide in={open} { ...props } container={ref.current}>
							<Image src={image} width={180} height={180}/>
						</Slide>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<div>
  <Slide in={checked} direction='up'>
    {content}
  </Slide>
  
  <Slide in={checked} direction='up' container={containerRef.current}>
    {content}
  </Slide>
</div>`
		}
	}
}
Basic.args = {
	timeout: 500,
	direction: 'up'
}
