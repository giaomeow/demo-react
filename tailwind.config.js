/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "header-padding": "30px",
        "section-padding": "80px",
      },
      aspectRatio: {
        "phim-img": "4 / 3",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
