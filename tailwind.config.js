/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Deep Slate Blue
        secondary: '#1E293B', // Slate Gray
        light: {
          100: '#F8FAFC', // Crisp white
          200: '#CBD5E1', // Cool gray
          300: '#94A3B8', // Muted slate
        },
        dark: {
          100: '#334155', // Card borders or backgrounds
          200: '#020617', // Deepest black-blue
        },
        accent: '#F59E0B', // Warm Amber/Gold
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
