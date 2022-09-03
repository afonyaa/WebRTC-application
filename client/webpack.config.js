const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@images': path.resolve(__dirname, './src/images'),
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      title: 'Development',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
};
