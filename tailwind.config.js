/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#fffcf8",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        murecho: ["Murecho", "sans-serif"],
      },
    },
  },
  plugins: [],
};
