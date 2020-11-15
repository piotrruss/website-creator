// const admin = require("./client/src/admin/webpack.config");
// const admin = require("./client/src/admin/webpack.config");
// const login = require("./survey.config");
// module.exports = [account, survey];

const path = require("path")
// const CopyPlugin = require('copy-webpack-plugin')
// module.exports = {
module.exports = ['login', 'admin'].map(appName => ({
  entry: "./client/src/" + appName + "/jsx/App.jsx",
  output: { filename: "out.js", path: path.resolve(__dirname, "client", appName) },
  mode: "development", watch: true,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         from: '*.html',
  //         context: 'client/'
  //       },
  //       {
  //         from: './images/*',
  //         context: 'client/'
  //       },
  //     ],
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.(png|jpg|svg|gif)$/, 
      //   exclude: /node_modules/,
      //   loader: 'file-loader?name=./images/[name].[ext]' 
      // },
      {
        test: /\.(eot|ttf|woff|otf|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=./fonts/[name].[ext]' 
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-2", "react"]
          }
        }
      }
    ]
  }
}));

