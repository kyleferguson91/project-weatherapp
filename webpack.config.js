const path = require('path');

module.exports = {
    mode: 'development',
  entry: '../src/script.js',
  output: {


    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [


     {

       test: /\.(png|svg|jpg|jpeg|gif)$/i,

       type: 'asset/resource',

     },
    ],
  },

};