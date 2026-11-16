/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FBF6FD",
          100: "#F4E9F8",
          200: "#E7D0F0",
          300: "#D2A9E2",
          400: "#B477CE",
          500: "#9645B5",
          600: "#7E2B98",
          700: "#6A2181",
          800: "#4F1862",
          900: "#331040",
          950: "#1C0824",
        },
        ink: {
          DEFAULT: "#1E1027",
          soft: "#4A3D55",
          muted: "#7A6E84",
        },
        space: "#040B08",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,16,39,0.04), 0 8px 24px -12px rgba(79,24,98,0.18)",
        glow: "0 20px 60px -20px rgba(126,43,152,0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
