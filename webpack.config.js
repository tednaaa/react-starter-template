const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

require('dotenv').config();

const { PORT } = process.env;

module.exports = (env, argv) => {
  const isDevelopment = argv?.mode === 'development';

  return {
    entry: path.join(__dirname, 'src', 'app', 'main.tsx'),
    output: {
      filename: 'js/[name].[contenthash].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      hot: true,
      port: PORT,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: path.join(__dirname, 'public', 'favicon.ico'),
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? 'css/[name].css'
          : 'css/[name].[contenthash].css',
      }),
      new Dotenv({ systemvars: true }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(svg|bmp|gif|jpg|jpeg|png|avif|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext]',
          },
        },
      ],
    },
  };
};
