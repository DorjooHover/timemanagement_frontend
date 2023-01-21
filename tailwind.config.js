
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      screens: {
        xs: "475px",
        "3xl": "1800px",
      },
      colors: {
        dark: "#05070c",
        primary: "#1890ff", // rgb(24, 144, 255)
        secondary: "rgb(0, 21, 41)", // 001529
        bglight: "#0E2036",
        bgdark: "#001529", // rgb(0, 21, 41)
        bgGrey: "#eef0f2",
        grey: "#676767",
        dark: "#181818",
        mainBlossom: "#1d1e44",
        mainBlue: "#4b65f6",
      },
    },
  },
  plugins: [],
};
