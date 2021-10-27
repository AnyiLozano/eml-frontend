const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: ["./{layouts,pages,components}/**/*.{js,jsx,ts,tsx}"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/custom-forms"), 
    plugin(function({ addComponents, addBase, theme }){
      addBase({
        div:{}
      })
      const components = {}
      addComponents(components)
    })
  ],
}
