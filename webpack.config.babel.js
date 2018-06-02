import path from "path";
import webpack from "webpack";

export default {
  mode: "development",
  entry: ["./src/client/index.js"],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: `http://localhost:8000/dist/`
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader"
          }
        }
      },
      {
        test: /\.js/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".vue"]
  },
  devServer: {
    port: 8000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
