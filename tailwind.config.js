/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gmm: {
          flame: "#FC5812",
          garnet: "#B61B07",
          amber: "#FD8D27",
          pearl: "#FBFBFD",
          canvas: "#F4F5F8",
          charcoal: "#0F141C",
          obsidian: "#0A0D12",
          slate: "#151922",
          muted: "#5A6578",
          subtle: "#8E9AA8",
          hairline: "rgba(15, 23, 42, 0.08)",
          hairlineDark: "rgba(255, 255, 255, 0.09)",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        bengali: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
