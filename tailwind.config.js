module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        navigation: "#232A34",
        button: '#05A081',
        light: '#5e5e5e',
        active: '#0064f9',
        search: '#1A1A1A'
      },
      fontSize: {
        'xxs': '.4rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
