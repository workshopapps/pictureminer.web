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
        '.features-card': {
          width: '265px',
          // height: '254px',
          background: '#FFFFFF',
          /* sm */
          'box-shadow':
            '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          'border-radius': '15px',
          /* Inside auto layout */
          flex: 'none',
          order: 0,
          'flex-grow': 0,
          '@media screen and (max-width: 768px)': {
            width: '201px',
          },
        },
        '.testimonial-card': {
          width: '265px',
          // height: '254px',
          background: '#FFFFFF',
          /* sm */
          'box-shadow':
            '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          'border-radius': '15px',
          '@media screen and (max-width: 640px)': {
            width: '172px',
          },
          '@media screen and (max-width: 768px)': {
            width: '201px',
          },
        },
      });
    }),
  ],

      colors: {
        lightOrange: 'hsl(var(--lightOrange))',
        mainOrange: 'hsl(var(--mainOrange))',
        modalGray: 'hsl(var(--grayModal) / 25%)',
        inputGray: 'hsl(var(--grayModal) / 50%)',
      },
      fontSize: {
        xLarge: 'var(--fs-xl)',
        large: 'var(--fs-lg)',
        normal: 'var(--fs)',
        small: 'var(--fs-sm)',
        xSmall: 'var(--fs-xs)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],

};
