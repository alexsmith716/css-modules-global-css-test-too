const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const rootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(rootPath, './dist');

// https://nodejs.org/api/modules.html#modules_folders_as_modules

// 'entry > vendor' >>>> entry point to that library
// Folders as Modules:
// folder ('bootstrap') passed to require() as an argument
// folder ('react-dom') passed to require() as an argument

// look up single entry point in webpack

module.exports = {

  devtool: 'source-map',

  context: rootPath,

  entry: {
    main: [
      './src/assets/scss/theme/theme.scss',
      './src/index.js'
    ],
    vendor: [
      //'react',
      //'react-dom',
      'jquery',       // './node_modules/jquery/package.json'    > "main": "dist/jquery.js",
      'popper.js',    // './node_modules/popper.js/package.json' > "main": "dist/umd/popper.js",
      'bootstrap', // './node_modules/bootstrap/package.json' > "main": "dist/js/bootstrap.js"
      // './src/assets/scss/bootstrap/customizations/customizedScripts.js',
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
        // test: /\.jsx?$/,
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        include: [ path.resolve(rootPath, 'src/assets/scss') ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
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
        ]
      },
      {
        test: /\.(scss|css)$/,
        exclude: [ path.resolve(rootPath, 'src/assets/scss') ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
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
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(rootPath, 'src/assets/scss/mixins/mixins.scss')
              ],
            },
          },
        ]
      },
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
    extensions: [ '.js', '.jsx', '.json' ],
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

    new HtmlWebpackPlugin({
      template: path.join(rootPath, './src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body'
    }),

    // on by default in production mode
    // new webpack.NamedModulesPlugin(),

    new MiniCssExtractPlugin({
      // filename: '[name].css',
      // filename: '[name].[hash].css',
      // chunkFilename: '[id].[hash].css',
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

  ],
};
