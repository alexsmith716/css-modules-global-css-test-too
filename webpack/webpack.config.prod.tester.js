const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(rootPath, './dist');

module.exports = {

  devtool: 'source-map',

  context: rootPath,

  entry: {
    main: [
      // 'font-awesome/scss/font-awesome.scss',
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
    // path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    // publicPath: './'
    //path: __dirname,
    //filename: '[name].js',
    //publicPath: '/',
    // path: path.resolve(__dirname, '../public/assets'),
    // // the target directory for all output files - absolute path
    // publicPath: '/assets/',
    // // the url to the output directory resolved relative to the HTML page
    //filename: '[name].[hash].js',
    //chunkFilename: '[name].[chunkhash].js',
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
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              sourceMap: true,
              //  alias: {
              //    '../fonts': 'font-awesome/fonts',
              //  }
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
              //includePaths: [
              //  path.resolve(rootPath, 'node_modules/font-awesome/scss')
              //],
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
    extensions: ['.js', '.jsx', '.json'],
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
      filename: '[name].css',
      //filename: '[name].[hash].css',
      //chunkFilename: '[id].[hash].css'
    }),

  ],
};
