/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        degital: ['LABDegital', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s infinite step-start',
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
