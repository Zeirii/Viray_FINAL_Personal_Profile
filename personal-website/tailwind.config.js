/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind to look for classes in your Vue files
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // This enables the "dark" class on the <html> tag for your theme switcher
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0c10', // Your custom Jake Sinclair background color
      },
    },
  },
  plugins: [],
}