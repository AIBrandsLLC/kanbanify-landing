/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          light: 'var(--color-text-light)',
        },
        success: 'var(--color-success)',
        background: {
          light: 'var(--color-background)',
          alt: 'var(--color-background-alt)',
        },
        border: 'var(--color-border)',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Public Sans', 'sans-serif'],
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
