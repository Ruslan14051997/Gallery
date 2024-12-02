const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				accent: "#EA1800"
			},
			fontFamily:{
				playfair:["Playfair Display",...defaultTheme.fontFamily.serif],
				gabriela:["Gabriela",...defaultTheme.fontFamily.serif],
				italiana:["Italiana",...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
