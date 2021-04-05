const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/script2.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
