import { StrictMode } from 'react'
import type { Preview, Decorator } from '@storybook/react'

export const decorators: Decorator[] = [
	Story => (
		<StrictMode>
			<div style={{ padding: 10 }}>
				<Story />
			</div>
		</StrictMode>
	)
]

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
