/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1f9d55',
        'background-light': '#f6f7f8',
        'background-dark': '#101922'
      },
      fontFamily: {
        display: ['JetBrains Mono', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      }
    }
  }
}
