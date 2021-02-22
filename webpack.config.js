const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      // 用了 ts-loader 包含了 babel-loader 功能，似乎可以不用这段了。
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-react']
      //     }
      //   }
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
  })],
};
