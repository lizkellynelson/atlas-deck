/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Merriweather', 'Georgia', 'serif'],
        'display': ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'atlas': {
          black: '#000000',
          white: '#FFFFFF',
          'light-gray': '#efeff2',
          'dark-gray': '#313131',
          lime: '#ceff00',
          // Lighter variations of lime for backgrounds/hover states
          'lime-50': '#f7ffe6',
          'lime-100': '#efffcc',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
