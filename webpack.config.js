const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  target: "node",
  mode: "development",
  entry: {
    lib: path.resolve(__dirname, "lib/lib"),
    ["lib-no-prefetch"]: path.resolve(__dirname, "lib/lib-no-prefetch"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs2",
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
