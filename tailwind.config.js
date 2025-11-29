// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional: add NovaAI brand colors if needed
        purpleNova: "#8b5cf6",
        pinkNova: "#ec4899",
        yellowNova: "#fbbf24",
      },
      animation: {
        // Keep only animations you still use, e.g., fade-ups or cursors
        "fade-up": "fadeUp 0.7s cubic-bezier(.2, .9, .3, 1) forwards",
        "fadeInUp": "fadeInUp 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
