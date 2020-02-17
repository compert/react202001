const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  filename: './index.html',
})

const config = mode => {
  const devMode = mode === 'development'
  return {
    entry: ['./src/index.js'],
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'index.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: devMode
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[name]__[local]--[hash:base64:5]',
                },
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                context: 'src',
                esModule: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [htmlPlugin],
    devServer: {
      historyApiFallback: {
        disableDotRule: true,
      },
    },
  }
}

module.exports = (env, argv) => {
  const {mode} = argv
  return config(mode)
}
