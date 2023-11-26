/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#739072',
        'secondary': '#ECE3CE',
        'srBlack': '#101010',
        'srWhite': '#FFFFFF',
        'modal': 'rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

