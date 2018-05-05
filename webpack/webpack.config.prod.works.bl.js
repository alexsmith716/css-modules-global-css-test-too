const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const rootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(rootPath, './dist');

// https://github.com/webpack-contrib/expose-loader
// https://webpack.js.org/guides/shimming/

module.exports = {

  devtool: 'source-map',

  context: rootPath,

  entry: {
    main: [
      'bootstrap-loader',
      './src/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    // path: __dirname,
    // filename: '[name].js',
    // publicPath: '/',
    // path: path.resolve(__dirname, '../public/assets'),
    // // the target directory for all output files - absolute path
    // publicPath: '/assets/',
    // // the url to the output directory resolved relative to the HTML page
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  optimization: {
    splitChunks: {
      automaticNameDelimiter: "-",
      chunks: 'all',
      minSize: 0,
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },

  // optimization: {
  //   splitChunks: {
  //     automaticNameDelimiter: "-",
  //     chunks: 'all',
  //     minSize: 0,
  //   },
  //   occurrenceOrder: true,
  //   minimize: true,
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       sourceMap: true,
  //       uglifyOptions: {
  //         ecma: 8,
  //         warnings: false,
  //         compress: {
  //           warnings: false,
  //           drop_console: true,
  //         },
  //         mangle: false,
  //         output: {
  //           beautify: false,
  //           comments: false
  //         },
  //         
  //         toplevel: false,
  //         nameCache: null,
  //         ie8: false,
  //         keep_classnames: undefined,
  //         keep_fnames: false,
  //         safari10: false,
  //       }
  //     })
  //   ]
  // },

  module: {

    strictThisContextOnImports: true,

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader',
          },
        ],
      },
      // {
      //   test: /\.(scss|css)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //   ]
      // },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              // importLoaders: 3,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/assets/scss/mixins/mixins.scss'),
              ],
            },
          },
          ]
        })
      },
      // {
      //   test: /\.(css)$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]__[local]__[hash:base64:5]',
      //         importLoaders: 1,
      //       }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //     },
      //   ]
      // },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [{
          loader: 'url-loader',
        }],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
      },
      // {
      //   test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   use: 'url-loader',
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      //   use: 'file-loader',
      // },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json',],
  },

  plugins: [

    new CleanWebpackPlugin([assetsPath], { root: rootPath }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production'), },

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default'],
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),

    new ExtractTextPlugin({
      // filename: '[name].css',
      filename: '[name].[id].css',
      disable: false, 
      allChunks: true
    }),

    // new MiniCssExtractPlugin({
    //  filename: '[name].css',
    //  // filename: '[name].[contenthash].css'
    // }),

    new HtmlWebpackPlugin({
      template: path.join(rootPath, './src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body'
    }),

    // on by default in production mode
    // new webpack.NamedModulesPlugin(),

  ],
};
