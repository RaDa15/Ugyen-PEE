/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        up: {
          purple: "#6B5575",
          "purple-dark": "#3F304A",
          "purple-deep": "#251B2E",
          "purple-light": "#EDE8F0",
          "purple-subtle": "#F4F1F6",
          teal: "#176B73",
          "teal-dark": "#0E484E",
          "teal-light": "#E7F2F2",
          gold: "#D5A928",
          "gold-hover": "#C1961F",
          "gold-light": "#FBF5E6",
          red: "#C65B4B",
          green: "#5E8B58",
          background: "#F8F7F9",
          text: "#202024",
          "text-muted": "#66636A",
          border: "#E4DFE7",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(63, 48, 74, 0.08)',
        'card-hover': '0 12px 32px -4px rgba(63, 48, 74, 0.16)',
        'hero-btn': '0 4px 14px 0 rgba(213, 169, 40, 0.39)',
      }
    },
  },
  plugins: [],
}
