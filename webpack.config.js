const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  return {
    context: path.resolve(__dirname, 'frontend'),
    entry: {
      top: './top/main.js'
    },
    output: {
      path: path.resolve(__dirname, 'public/assets'),
      filename: mode === 'development' ? '[name].bundle.js' : '[name]-[hash].bundle.js'
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'frontend')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new ManifestPlugin()
    ],
    devServer: {
      disableHostCheck: true,
      hot: true,
      public: 'localhost:8080',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      contentBase: path.resolve(__dirname, '../../public/assets')
    }
  };
};
