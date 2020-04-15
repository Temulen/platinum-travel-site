const path = require("path");
const postCSSPlugins = [
  require("postcss-nested"),
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("autoprefixer")
];
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  devServer: {
    before: function(app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0"
  },
  mode: "development",
  // watch: true,
  module: {
    rules: [
      {
        // test: /\.css$/i,
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          { loader: "postcss-loader", options: { pliguns: postCSSPlugins } }
        ]
      }
    ]
  }
};
