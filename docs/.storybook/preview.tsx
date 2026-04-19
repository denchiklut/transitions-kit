import type { Decorator, Preview } from '@storybook/react'
import { StrictMode } from 'react'

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
