/**
 * @format
 * @type {import('tailwindcss').Config}
 */
import colors from 'tailwindcss/colors';

export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {...colors.orange, DEFAULT: colors.orange[200]}, 
				secondary: {...colors.yellow, DEFAULT: colors.yellow[200]},
				accent: {...colors.red, DEFAULT: colors.red[200]},
				
			}
		},
	},
	plugins: [daisyui],
}
