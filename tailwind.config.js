/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin');

// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			Roboto: ['Roboto', 'sans-serif'],
        	Axiforma: ['Axiforma', 'sans-serif'],
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
			'.how-it-works-gradient-text': {
			  position: 'absolute',
			  width: '95px',
			  // height: '90px',
			  left: '49px',
			  top: '-45px',
			  'font-family': 'Axiforma',
			  'font-style': 'normal',
			  'font-weight': '700',
			  'font-size': '72px',
			  'line-height': '90px',
			  '@media screen and (max-width: 768px)': {
				'font-size': '48px',
			  },
			  'letter-spacing': '-0.02em',
			  background: 'linear-gradient(207.72deg, #686868 -7.41%, rgba(104, 104, 104, 0) 65.31%)',
			  '-webkit-background-clip': 'text',
			  '-webkit-text-fill-color': 'transparent',
			  'background-clip': 'text',
			  'text-fill-color': 'transparent',
			}
		  });
		})
	  ],
};
