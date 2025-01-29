/**
 * @format
 * @type {import('tailwindcss').Config}
 */
import daisyui from 'daisyui';
// import colors from 'tailwindcss/colors';

const colors = require('tailwindcss/colors')

export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {...colors.orange, DEFAULT: colors.orange[200]}, 
				secondary: {...colors.yellow, DEFAULT: colors.yellow[600]},
				accent: {...colors.red, DEFAULT: colors.red[800]},
				
			}
		},
	},
	plugins: [daisyui],
}
