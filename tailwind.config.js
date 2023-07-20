/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lines: "#56b8e1",
      primaryColor: "#676e8f",
      header: "#FFF",
      primary: "#1E90C6",
      secondary: "#ACDBE6",
      tertiary: "#FD9473",
      quarta: "#060F13",
      "background-p": "#ececec",
      "background-s": "#e9f5f7",
      PrimaryCard: "#0044724f",
      FromPrimaryGradientCard: "#00000000 0%",
      ToPrimaryGradientCard: "#343748 80%",
      btnPrimary: "#1fb6ff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 45deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient": "linear-gradient(140deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
