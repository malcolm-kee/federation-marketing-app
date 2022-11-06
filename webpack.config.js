require('dotenv').config();

const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

const pkgJson = require('./package.json');
const dependencies = pkgJson.dependencies;

const port = process.env.PORT || 8183;

/**
 * @returns {Promise<import('webpack').Configuration>}
 */
module.exports = async (env, { mode }) => {
  const isProd = mode === 'production';

  return {
    mode,
    output: {
      publicPath: 'auto',
      filename: isProd
        ? 'static/js/[name].[contenthash].js'
        : 'static/js/[name].js',
      chunkFilename: isProd
        ? 'static/js/[name].[contenthash].js'
        : 'static/js/[name].chunk.js',
      assetModuleFilename: isProd
        ? 'static/media/[name][hash:8][ext]'
        : 'static/media/[name][ext]',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },

    devServer: {
      port: port,
      historyApiFallback: true,
      hot: false,
    },

    target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: isProd
                    ? '[hash:base64]'
                    : '[path][name]__[local]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // The general 'asset' type will choose to 'inline' or 'resource' depends on file size.
          // see https://webpack.js.org/guides/asset-modules/#general-asset-type
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10000,
            },
          },
        },
      ],
    },

    devtool: isProd ? 'source-map' : 'cheap-module-source-map',

    plugins: [
      new ModuleFederationPlugin({
        name: 'marketing',
        filename: 'remoteEntry.js',
        exposes: {
          './banner': './src/exposes/banner',
          './header': './src/exposes/header',
          './hero-section': './src/exposes/hero-section',
        },
        remotes: {},
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
          'react-query': {
            singleton: true,
            requiredVersion: dependencies['react-query'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin(),
    ].filter(Boolean),
    optimization: {
      minimize: isProd,
      minimizer: [
        '...', // keep existing minimizer
        new CssMinimizerPlugin(),
      ],
    },
  };
};
