import { useState } from 'react'
import type { StoryFn } from '@storybook/react'
import { Accordion, type Props } from './accordion'

export default {
	component: Accordion,
	title: 'Advanced/Accordion'
}

const BasicTemplate: StoryFn<Props> = props => {
	const [open, setOpen] = useState(true)

	return (
		<Accordion expanded={open} {...props} onChange={() => setOpen(!open)}>
			<p>Summary</p>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
				ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
			</p>
		</Accordion>
	)
}

const MultipleTemplate: StoryFn<Props> = props => {
	const [open, setOpen] = useState(0)

	return (
		<div>
			{[...Array.from(Array(3).keys())].map(i => (
				<Accordion
					key={i}
					expanded={i === open}
					onChange={() => setOpen(open === i ? -1 : i)}
					{...props}
				>
					<p>Summary {i + 1}</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, autem commodi
						delectus dignissimos distinctio earum ex explicabo facilis itaque maiores,
						officia porro quae quibusdam quidem, quis recusandae reiciendis tempore
						totam?
					</p>
				</Accordion>
			))}
		</div>
	)
}

export const Basic = BasicTemplate.bind({})
export const Multiple = MultipleTemplate.bind({})
