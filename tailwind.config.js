/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F0F',
        surface: '#181818',
        accent: '#D4A373',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
