module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Roboto Mono", "monospace"],
      },
      colors: {
        primaryGray: "#0e131f",
        secondaryGray: "#151c26",
        primaryBlue: "#1042ae",
        graySpecial: "#9e9589",
        grayP: "#cecac3",
        special: "#30416b",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
