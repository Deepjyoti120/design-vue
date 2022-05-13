const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin(({
    addVariant,
    e
  }) => {
    addVariant('sidebar-expanded', ({
      modifySelectors,
      separator
    }) => {
      modifySelectors(({
        className
      }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
    });
  })],
}