const path = require('path')
module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   loaders: [
     {
       test: [/\.jsx?$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel',
       query: {
         presets: ['react', 'es2015'] 
       }
     },
     {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./")]
  }
}