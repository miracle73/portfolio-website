/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // => @media (min-width: 640px) { ... }
    },

    extend: {
      colors: ({ colors }) => ({
        dark: '#000000E5',

      }),
    },
  },
  plugins: [],
}

