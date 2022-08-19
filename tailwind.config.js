/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
  ],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
