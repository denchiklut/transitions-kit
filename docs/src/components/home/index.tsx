import { useState } from 'react'
import { Accordion } from 'components/accordion'

export const Home = () => {
	const [expanded, setExpanded] = useState<string | false>('panel1')

	const handleChange = (panel: string) => (newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false)
	}

	return (
		<div style={{ padding: 20, width: 728, margin: 'auto' }}>
			<p>Home page</p>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<p>Collapsible Group Item #1</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
					lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
					leo lobortis eget.
				</p>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<p>Collapsible Group Item #2</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
					lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
					leo lobortis eget.
				</p>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<p>Collapsible Group Item #3</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
					lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
					leo lobortis eget.
				</p>
			</Accordion>
		</div>
	)
}
