const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.html", to: "index.html" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    watchFiles: "src/**/*",
  },
};
