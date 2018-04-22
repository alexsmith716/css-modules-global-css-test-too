const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rootPath = path.resolve(__dirname, '..');

module.exports = {

  mode: 'production',

  context: rootPath,

  entry: {
    main: [
      'babel-polyfill',
      './src/assets/scss/global/global2.scss',
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
    //filename: '[name].js',
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
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //   loader: 'style-loader',
          // },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              //importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                // path.resolve(rootPath, 'node_modules'),
              ],
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(rootPath, 'src/assets/scss/mixins/mixins.scss'),
              ],
            },
          },
        ]
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            mimetype: 'application/font-woff'
          }
        }],
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            mimetype: 'application/octet-stream'
          }
        }],
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
        }],
      }, 
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            mimetype: 'image/svg+xml'
          }
        }],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
          },
        }],
      },
      // {
      //   test: /\.(jpg|jpeg|gif|png|svg)$/i,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10240,
      //     },
      //   }],
      // },
      // {
      //   test: /\.(ttf|eot|woff|woff2)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //     },
      //   }],
      // },
      // webpack 4.0.0 handles JSON natively 
      // {
      //   test: /\.json$/,
      //   use: [
      //     {
      //       loader: 'json-loader',
      //     }
      //   ]
      // },
      {
        test: '/popper.js/',
        use: [{
          loader: 'expose-loader',
          options: 'popper',
        },{
          loader: 'expose-loader',
          options: 'Popper',
        }]
      },
      {
        test: '/jquery/',
        use: [{
          loader: 'expose-loader',
          options: 'jQuery',
        },{
          loader: 'expose-loader',
          options: '$',
        }]
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css',],
    modules: [ 'src', 'node_modules', ],
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        NODE_ENV  : JSON.stringify('production'),
      },
      REDUX_DEVTOOLS : false,
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),

    new HtmlWebpackPlugin({
      template: path.join(rootPath, './src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body'
    }),

    // on by default in production mode
    // new webpack.NamedModulesPlugin(),

    new MiniCssExtractPlugin({
      // filename: 'styles.css',
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),

  ],
};
