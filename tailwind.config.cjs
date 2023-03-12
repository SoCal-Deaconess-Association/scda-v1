/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#97CEC1',
        primaryLight: '#C3DACD',
        primaryDark: '#4D867C',
        primaryHover: '#5e968b',
        primarySelect: '#81b8ac',
        primaryRow: '#4d867c20',
        secondary: '#CE97A4',
        secondaryLight: '#F1D1D9',
        secondaryDark: '#AF6677',
        background: '#f3fcff',
        backgroundTransparent: '#ffffff8a',
        contrastText: '#ffffff',
        primaryText: '#7f7f7f',
        secondaryText: '#9f9f9f',
      },
      screens: {
        tablet: '1024px',
      },
    },
  },
  plugins: [],
};
