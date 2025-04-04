/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-background': 'var(--light-background)',
        'light-text': 'var(--light-text)',
        'light-accent': 'var(--light-accent)',
        'light-hover': 'var(--light-hover)',
        'light-border': 'var(--light-border)',
        
        'dark-background': 'var(--dark-background)',
        'dark-text': 'var(--dark-text)',
        'dark-accent': 'var(--dark-accent)',
        'dark-hover': 'var(--dark-hover)',
        'dark-border': 'var(--dark-border)',
      },
      fontFamily: {
        gotu: ['var(--font-gotu)'],
        mulish: ['var(--font-mulish)'],
      },
    },
  },
  plugins: [],
}; 