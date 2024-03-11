import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
		alias: {
			components: '/src/components',
			pages: '/src/pages',
			data: '/src/data',
			hooks: '/src/hooks',
			services: '/src/services',
			assets: '/src/assets',
			api: '/src/api',
			routers: '/src/routers',
			store: '/src/store',
			constants: '/src/constants',
			types: '/src/types',
			helpers: '/src/helpers'
		}
	},
})
