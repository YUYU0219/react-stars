'use strict';

const path = require('path'); 

module.exports = {

  mode: 'development',
  entry: ['./example/index.js'],
  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example'),
  },

  devServer: {
    static: path.resolve(__dirname, 'example'),  // 指定靜態文件的根目錄
    port: 8000,  // 設置端口
    open: true,   // 自動在瀏覽器中打開
    hot: true,    // 啟用熱重載
  },


  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }

};
