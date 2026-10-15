/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#d9dadd',
        ink: '#0a0a0a',
        paper: '#ffffff',
        mute: '#6b6c70',
        dim: '#3a3a3c',
        accentYellow: '#e4ff6a',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Anton', 'Impact', '"Arial Narrow"', 'sans-serif'],
      },
      borderRadius: {
        'card': '28px',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 26s linear infinite',
        marquee: 'slide 30s linear infinite',
      },
    },
  },
  plugins: [],
}
