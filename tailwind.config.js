/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: 'var(--color-concrete)',
        steel: 'var(--color-steel)',
        slate: 'var(--color-slate)',
        amber: 'var(--color-amber)',
        orange: 'var(--color-orange)',
        rust: 'var(--color-rust)',
      },
      fontFamily: {
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
        bengali: ['var(--font-hind-siliguri)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '62rem',
        'layout': '90rem',
      },
      padding: {
        'section': 'clamp(72px, 9vw, 160px)',
        'layout': 'clamp(20px, 5vw, 64px)',
      },
      screens: {
        'tablet': '720px',
        'desktop': '1024px',
        'large': '1920px',
        'huge': '2560px',
      }
    },
  },
  plugins: [],
}
