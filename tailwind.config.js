/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0C0C0C',
        'light': '#F5F5F3',
        'light-pure': '#FFFFFF',
        'text-primary': '#F2F2F0',
        'text-dark': '#0C0C0C',
        'text-secondary': 'rgba(242, 242, 240, 0.6)',
        'border-subtle': 'rgba(242, 242, 240, 0.16)',
      },
      fontFamily: {
        'sans': ['Inter Tight', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 15vw, 14rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(3rem, 12vw, 10rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(2rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-lg': ['clamp(1.25rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-md': ['clamp(1.125rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['clamp(0.9rem, 1.2vw, 1.125rem)', { lineHeight: '1.7', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
