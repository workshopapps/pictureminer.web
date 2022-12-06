/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        titlegrey: '#434343',
        subgrey: '#444444',
        lightOrange: 'hsl(var(--lightOrange))',
        mainOrange: 'hsl(var(--mainOrange))',
        modalGray: 'hsl(var(--grayModal) / 25%)',
        inputGray: 'hsl(var(--grayModal) / 50%)',
        grey300: 'hsl(var(--grey300))',
        grey800: 'hsl(var(--grey300))',
        secBlue: 'hsl(var(--sec-blue))',
        secBrown: 'hsl(var(--sec-brown))',
      },
      fontSize: {
        xLarge: 'var(--fs-xl)',
        large: 'var(--fs-lg)',
        medium: 'var(--fs-md)',
        normal: 'var(--fs)',
        small: 'var(--fs-sm)',
        xSmall: 'var(--fs-xs)',
      },

      fontFamily: { axiforma: 'Axiforma' },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
  ],
};
