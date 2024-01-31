import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import svgr from "vite-plugin-svgr"

/// <reference types="vite-plugin-svgr/client" />
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr()
	],
  base: "./",
	resolve: {
		alias: [
			{find: '@components', replacement: path.resolve(__dirname, './src/components')},
			{find: '@providers', replacement: path.resolve(__dirname, './src/components/providers')},
			{find: '@assets', replacement: path.resolve(__dirname, './src/assets')},
			{find: '@icons', replacement: path.resolve(__dirname, './src/components/icons')},
			{find: '@pages', replacement: path.resolve(__dirname, './src/components/pages')},
			{find: '@', replacement: path.resolve(__dirname, './src/')},
		]
	},
})
