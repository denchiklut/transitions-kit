import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: resolve('src'),
			'@shared': resolve('src/components/@shared'),
			components: resolve('src/components'),
			pages: resolve('src/pages'),
			utils: resolve('src/utils'),
			assets: resolve('src/assets')
		}
	}
})
