/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#CB8939',
          900: '#9B682C',
        },
        black: {
          400: '#717171',
          900: '#111111',
        },
      },

      fontFamily: {
        sans: ['"Raleway"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Cinzel"', 'ui-serif', 'Georgia'],
      },

      skew: {
        45: '30deg',
      },

      transitionDuration: {
        400: '400ms',
      },

      spacing: {
        15: '3.75rem',
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    function ({ addVariant }) {
      addVariant('icon', '& path');
      addVariant('icon-hover', '&:hover path');
    },
  ],
};
