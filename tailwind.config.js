/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0F0413', // Deep night-purple
        secondary: '#1A0B22', // Dark violet
        light: {
          100: '#F3E5F5', // Clean off-white purple
          200: '#D1C4E9', // Lavender grey
          300: '#9575CD', // Muted purple
        },
        dark: {
          100: '#2D1B36', // Lighter purple-black for cards
          200: '#14081A', // Shadow color
        },
        accent: '#C084FC', // Bright Electric Purple
      },
    },
  },
  plugins: [],
};

/*
colors: {
        primary: '#030014',
        secondary: '#151312',
        light: {
          100: '#D6C7FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#221F3D',
          200: '#0F0D23',
        },
        accent: '#AB8BFF',
      },
*/
