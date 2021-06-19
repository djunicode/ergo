const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const path = require("path");
const nonce = require("./create-nonce")();
const base = require("./webpack.config");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map", // Show the source map so we can debug when developing locally
  devServer: {
    host: "localhost",
    port: "40992",
    hot: true, // Hot-reload this server if changes are detected
    compress: true, // Compress (gzip) files that are served
    contentBase: path.resolve(__dirname, "app/dist"), // Where we serve the local dev server's files from
    watchContentBase: true, // Watch the content base for changes
    watchOptions: {
      ignored: /node_modules/, // Ignore this path, probably not needed since we define contentBase above
    },
  },
  // see https://github.com/reZach/secure-electron-template/issues/14#issuecomment-622208731
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/src/index.ejs"),
      filename: "index.html",
      nonce: nonce,
    }),
    new CspHtmlWebpackPlugin({
      "base-uri": ["'self'"],
      "object-src": ["'none'"],
      "script-src": ["'self'"],
      "style-src": ["'self'", `'nonce-${nonce}'`],
      "frame-src": ["'none'"],
      "worker-src": ["'none'"],
    }),
  ],
});
