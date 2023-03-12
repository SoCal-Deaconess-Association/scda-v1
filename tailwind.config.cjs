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
        secondary: '#CE97A4',
        secondaryLight: '#F1D1D9',
        secondaryDark: '#AF6677',
        background: '#f3fcff',
        contrastText: '#ffffff',
      },
      screens: {
        tablet: '1024px',
      },
    },
  },
  plugins: [],
};
