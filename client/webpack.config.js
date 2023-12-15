const path = require("path");

module.exports = {
  mode: "production", // Change mode to "production" for optimized build
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), // Specify the output path
    filename: "main.js",
  },
  // ... rest of your configuration
};

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
