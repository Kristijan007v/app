module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Roboto Mono", "monospace"],
      },
      colors: {
        /* Dark mode */
        primaryBg: "#0e131f",
        secondaryGray: "#161c26",
        primaryBlue: "#1042ae",
        graySpecial: "#9e9589",
        grayP: "#cecac3",
        special: "#30416b",
        headingPrimary: "#b3b0ac",
        headingSecondary: "#9e9589",
        /* Light mode */
        lightPrimaryBg: "#bfdbfe",
        lightSecondaryGray: "#cfe4fe",
        lightPrimaryBlue: "#1042ae",
        lightGraySpecial: "#1f2937",
        lightGrayP: "#111827",
        lightSpecial: "#30416b",
        lightHeadingPrimary: "#111827",
        lightHeadingSecondary: "#4b5563",
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
