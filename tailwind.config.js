/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      theme: {
        fontFamily: {
          tiltPrism: "Tilt Prism",
          main: ["Playfair Display", "sans-serif"],
          title: ["Cardo", "sans-serif"],
          about: ["Poppins", "sans-serif"],
        },
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        "gradation-b": "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(80px, 1fr))",
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
