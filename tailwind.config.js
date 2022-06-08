const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.25rem'],
      lg: ['1.375rem', '1.625rem'],
      xl: ['1.5625rem', '1.813rem'],
      '2xl': ['1.875rem', '2.125rem'],
      '3xl': ['2rem', '2.25rem'],
      '4xl': ['2.5rem', '2.75rem'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        primary: '#6c4fc9',
        secondary: '#1f46a2',
      },
      backgroundImage: {
        oval: 'https://cdn.dfx-id.com/assets/icons/bg_oval.svg',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        fading: 'fading .3s ease-in-out',
      },
      keyframes: {
        fading: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          backgroundColor: theme('backgroundColor.cyan'),
        },
      });
    }),
  ],
};
