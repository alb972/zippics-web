/* eslint-disable import/no-extraneous-dependencies */
import * as webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import path from "path";

// For accept devServer properties
interface WebPackConfiguration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
});

const config: WebPackConfiguration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    overlay: true,
    liveReload: true,
    port: 9000,
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx'
      // extension will be handled by 'ts-loader'.
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          // with ts-loader
          // we have to redefine this option.
          compilerOptions: {
            noEmit: false,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles SASS to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico|mp3|wav)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
