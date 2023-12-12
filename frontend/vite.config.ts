import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api/v0": {
				target: "http://localhost:4321",
				changeOrigin: true,
				secure: false,
			},
		},
	},
	plugins: [react()],
})
