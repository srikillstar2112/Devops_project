export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: { extend: {} },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    }
  },
  plugins: [],
}
