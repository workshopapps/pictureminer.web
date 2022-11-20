/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('tw-elements/dist/plugin')],
  theme: {
    extend: {
      colors: {
        titlegrey: '#434343',
        subgrey: '#444444',
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

      fontFamily: { axiforma: 'Axiforma' },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tw-elements/dist/plugin')],
};
