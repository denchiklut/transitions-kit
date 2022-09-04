import { StrictMode } from 'react'

export const decorators = [
	Story => (
		<StrictMode>
			<div style={{padding: 10}}>
				<Story/>
			</div>
		</StrictMode>
	)
]
