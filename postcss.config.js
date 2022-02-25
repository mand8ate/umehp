const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    "postcss-preset-env",
    tailwindcss,
    require("autoprefixer"),
    require("postcss-import"),
    require("cssnano")
  ],
};
