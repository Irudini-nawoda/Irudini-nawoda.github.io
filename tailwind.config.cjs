module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1e40af',
        muted: '#64748b'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}
