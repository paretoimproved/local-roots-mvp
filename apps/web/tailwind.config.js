/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Local-Roots Design System Colors
        primary: {
          DEFAULT: "#39B54A", // Primary Green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8B7355", // Earth Brown
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFD700", // Harvest Gold
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#6B7280", // Stone Gray
          foreground: "#FFFFFF",
        },
        background: "#FFFFFF", // Fresh White
        foreground: "#1F2937",
        border: "#E5E7EB",
        input: "#F9FAFB",
        ring: "#39B54A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}