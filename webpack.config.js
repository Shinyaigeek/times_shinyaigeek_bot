const path = require("path");
const webpack = require("webpack");

require("dotenv").config();

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist"),
  },
  devtool: "cheap-module-source-map",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          // transpileOnly is useful to skip typescript checks occasionally:
          // transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    webpack.DefinePlugin({
      process: {
        env: {
          TWITTER_API_KEY: JSON.stringify(process.env.TWITTER_API_KEY),
          TWITTER_API_SECRET_KEY: JSON.stringify(
            process.env.TWITTER_API_SECRET_KEY
          ),
          BEARER_TOKEN: JSON.stringify(process.env.BEARER_TOKEN),
          ACCESS_TOKEN: JSON.stringify(process.env.ACCESS_TOKEN),
          ACCESS_SECRET_TOKEN: JSON.stringify(process.env.ACCESS_SECRET_TOKEN),
        },
      },
    }),
  ],
};
