/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        priYellow: 'hsl(var(--pri__yellow))',
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
