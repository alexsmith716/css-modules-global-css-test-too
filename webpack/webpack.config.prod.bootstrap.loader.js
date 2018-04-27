const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
var assetsPath = path.resolve(rootPath, './dist');

// https://github.com/webpack-contrib/expose-loader
// https://webpack.js.org/guides/shimming/

module.exports = {

  devtool: 'source-map',

  context: rootPath,

  entry: {
    main: [
      'babel-polyfill',
      'bootstrap-loader',
      './src/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'jquery',
      'popper.js',
      'bootstrap',
    ],
  },

  output: {
    // path: __dirname,
    filename: '[name].js',
    // publicPath: '/',
    // path: path.resolve(__dirname, '../public/assets'),
    // // the target directory for all output files - absolute path
    // publicPath: '/assets/',
    // // the url to the output directory resolved relative to the HTML page
    // filename: '[name].[hash].js',
    // chunkFilename: '[name].[chunkhash].js',
  },

  // optimization: {
  //   splitChunks: {
  //     automaticNameDelimiter: "-",
  //     chunks: 'all',
  //     minSize: 0,
  //   },
  // },

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
  //   // minimize: true,
  //   // minimizer: [
  //   //   new UglifyJsPlugin({
  //   //     sourceMap: true,
  //   //     uglifyOptions: {
  //   //       compress: {
  //   //         warnings: true,
  //   //         drop_console: true,
  //   //       },
  //   //       mangle: false,
  //   //       output: {
  //   //         beautify: true,
  //   //         comments: false
  //   //       },
  //   //       warnings: true
  //   //     }
  //   //   })
  //   // ]
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
              importLoaders: 4,
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
            loader: 'resolve-url-loader',
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
      {
        // test: '/popper.js/',
        test: require.resolve('popper.js'),
        use: [{
          loader: 'expose-loader',
          options: 'popper',
        },
        {
          loader: 'expose-loader',
          options: 'Popper',
        }]
      },
      {
        // test: '/jquery/',
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },
          {
            loader: 'expose-loader',
            options: 'jquery',
          },
          {
            loader: 'expose-loader',
            options: '$',
          }
        ]
      },
      // { 
      //   // test: /jquery/,
      //   test: require.resolve('jquery'),
      //   use: [
      //     {
      //       loader: 'imports-loader?jQuery=jquery'
      //     },
      //     {
      //       loader: 'imports-loader?$=jquery'
      //     },
      //   ]
      // },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json',],
  },

  plugins: [

    new CleanWebpackPlugin([assetsPath], { root: rootPath }),

   new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
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
      //   Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      //   Button: "exports-loader?Button!bootstrap/js/dist/button",
      //   Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      //   Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      //   Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      //   Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      //   Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      //   Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      //   Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      //   Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),

    new ExtractTextPlugin({
      filename: '[name].css',
      // disable: false, 
      allChunks: true
    }),

    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   //filename: '[name].[hash].css',
    //   //chunkFilename: '[id].[hash].css'
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
