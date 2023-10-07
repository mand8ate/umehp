const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" },
        { from: "src/about.html", to: "about.html" },
        { from: "src/contacts.html", to: "contacts.html" },
        { from: "src/works.html", to: "works.html" },
        { from: "src/gallery.html", to: "gallery.html" },
        { from: "src/img/gallery", to: "gallery" },
        { from: "src/img/icons/ume_icon_red_1.png", to: "favicon.png" },
        { from: "src/loader.js", to: "loader.js" },
        { from: "src/loader.css", to: "loader.css" },
        {
          from: "src/files/athens_program.pdf",
          to: "files/athens_program.pdf",
        },
        {
          from: "src/files/athens_brochure.pdf",
          to: "files/athens_brochure.pdf",
        },
        { from: ".htaccess", to: ".htaccess" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)$/i,
        type: "asset/inline",
      },
    ],
  },
  devServer: {
    watchFiles: "src/**/*",
  },
};
