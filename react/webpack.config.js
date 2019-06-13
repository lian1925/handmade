const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:{
    app:"./src/main"
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"[name].js"
  },

  resolve:{
    extensions:[".tsx",".ts",".js",".json"]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html',
      inject:true
    })
  ],
  module:{
    rules:[
      {
        test:/\.tsx/,
        loader:"awesome-typescript-loader"
      }
    ]
  }
}