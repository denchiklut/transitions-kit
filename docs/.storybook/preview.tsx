import { StrictMode } from 'react'
import type { Preview } from '@storybook/react'

export const decorators = [
	Story => (
		<StrictMode>
			<div style={{ padding: 10 }}>
				<Story />
			</div>
		</StrictMode>
	)
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
};

export default preview;
