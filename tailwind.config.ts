import type {Config} from 'tailwindcss'


const config: Config = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'gradient-colors': 'linear-gradient(to bottom, #EB7474, #F4E4E4)',
			}),
			boxShadow: {
				'big': '0 0 30px 15px rgba(0, 0, 0, 0.2)', // Customize the shadow as needed
			},
			backgroundColor: {
				'button-color': '#7128F6',
				'modal-background-color': '#FFC3D6'
			},
			borderColor: {
				'gray-custom': '#A8A8A8', // Add custom color
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				urbanist: ['var(--font-urbanist)'],
			},
			colors: {
				'start-gradient': '#010103',
				'mid-gradient': '#5F3CE2',
				'end-gradient': '#CA298A',
			}
			
			
			
		},
	},
	plugins: [],
}
export default config
