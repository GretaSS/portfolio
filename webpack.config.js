// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/env"] }
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//       {
//         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'fonts/'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/dist/",
//     filename: "bundle.js"
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "public/"),
//     port: 3000,
//     publicPath: "http://localhost:3000/dist/",
//     hotOnly: true
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin()]
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // ,{
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
