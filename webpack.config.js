const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = env => {
  return {
    // 开发环境本地服务
    devServer: {
      contentBase: path.join(__dirname, "./app/public/"),
      compress: true,
      port: 7002,
      openPage: 'index.html',
    },
    devtool: 'cheap-eval-source-map',
    // 入口
    entry: {
      index: './web/entry.tsx',
      vendor: ['react', 'react-dom', 'history']
    },
    // Loader
    module: {
      rules: [
        // Typescript
        {
          test: /\.(tsx|jsx|js|ts)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        // css
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" },
          {
            loader: "css-loader",
          },
          { loader: "resolve-url-loader" }]
        },
        // scss module
        {
          test: /\.scss$/,
          use: [{ loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:12]'
              }
            }
          }, { loader: "resolve-url-loader" },
          { loader: "sass-loader" }],
          include: /style\.scss$/,
        },
        // scss no module
        {
          test: /\.scss$/,
          use: [{ loader: "style-loader" },
          {
            loader: "css-loader",
          },
          { loader: "resolve-url-loader" },
          { loader: "sass-loader" }],
          exclude: /style\.scss$/
        },
        // img
        {
          test: /\.(png|jpg|gif|svga)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 12,
                fallback: "file-loader",
                name: "[name].[hash:base64:4].[ext]",
                outputPath: "images"
              }
            }
          ]
        },
        // media
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash:base64:4].[ext]",
                outputPath: "voice"
              }
            }
          ]
        },
        // font
        {
          test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 10240,
            name: "[name].[hash:base64:4].[ext]",
            outputPath: "fonts"
          }
        }
      ],
    },
    // 解析
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', ".css", ".scss"],
      alias: {
        '@app': path.resolve(__dirname, 'web/app'),
        '@components': path.resolve(__dirname, 'web/components'),
        '@store': path.resolve(__dirname, 'web/mobx'),
        '@config': path.resolve(__dirname, 'web/config'),
        '@lib': path.resolve(__dirname, 'web/lib'),
        '@declarations': path.resolve(__dirname, 'declarations'),
      }
    },
    // 目标输出位
    output: {
      filename: '[name].[contentHash:8].js',
      path: path.join(__dirname, "./app/public/"),
    },
    // Since version 4 webpack runs optimizations for you depending on the chosen mode, still all optimizations are available for manual configuration and overrides.
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: env.NODE_ENV === 'production' ? 50000 : 500000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
        minChunks: 1,           //模块至少使用次数
        maxAsyncRequests: 5,    //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
        maxInitialRequests: 3,  //首页加载的时候引入的文件最多3个
        automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
        name: false,
      }
    },
    // 插件
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'web/template.html'),
        filename: 'index.html',
      }),
      new webpack.DefinePlugin({
        process_env_NODE_ENV: JSON.stringify(env.NODE_ENV)
      })
    ],
    // 性能提示
    performance: {
      maxEntrypointSize: 10240000,
      maxAssetSize: 10240000,
      hints: false
    }
  }
};