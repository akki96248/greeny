/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B6B3A',
          50: '#E8F3EC',
          100: '#D1E7D9',
          200: '#A3CFB4',
          300: '#75B78E',
          400: '#479F69',
          500: '#0B6B3A',
          600: '#095A31',
          700: '#074828',
          800: '#05371E',
          900: '#08291E',
        },
        earth: {
          DEFAULT: '#B47A2D',
          light: '#C99A4F',
          dark: '#8F5E1F',
        },
        cream: {
          DEFAULT: '#F4F1E8',
          light: '#FCFBF7',
          dark: '#EAE5D5',
        },
        natural: {
          grey: '#E6E8E2',
        },
        charcoal: '#17201B',
        muted: '#667069',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.18em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
