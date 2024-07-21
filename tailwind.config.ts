import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					from: {
						opacity: '0',
					},
					to: {
						opacity: '1',
					},
				},
				float: {
					'0%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(5px)',
					},
					'100%': {
						transform: 'translateY(0px)',
					},
				},
				floatingRotate: {
					'0%': {
						transform: 'translateY(0px) rotate(0deg)',
					},

					'50%': {
						transform: 'translateY(10px) rotate(360deg)',
					},

					'100%': {
						transform: 'translateY(0px) rotate(0deg)',
					},
				},
				// fadeInCircle: {
				// 	from: {
				// 		opacity: '0',
				// 	},
				// 	to: {
				// 		opacity: '.3',
				// 	},
				// },
				// changeSize: {
				// 	'0%': {
				// 		transform: 'scale(1)',
				// 	},
				// 	'50%': {
				// 		transform: 'scale(1.5)',
				// 	},
				// 	'100%': {
				// 		transform: 'scale(1)',
				// 	},
				// },
			},
			animation: {
				fadeIn: 'fadeIn var(--duration, 500ms) ease-in-out forwards',
				float: 'float 3s ease-in-out infinite',
				// fadeInCircle: 'fadeInCircle 3s linear',
				// changeSize: 'changeSize 20s linear infinite',
				floatingRotate: 'floatingRotate 10s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
export default config;
