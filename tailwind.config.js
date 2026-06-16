export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-dark': '#0f0f23',
        'cyber-darker': '#1a1a2e',
        'cyber-green': '#00ff88',
        'cyber-cyan': '#00d9ff',
        'cyber-blue': '#0088ff',
        'cyber-purple': '#8800ff',
        'cyber-red': '#ff0055',
        'cyber-orange': '#ff6b00',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'sans': ['Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.5)',
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 136, 255, 0.5)',
      },
    },
  },
  plugins: [],
}