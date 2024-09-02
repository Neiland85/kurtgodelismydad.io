const path = require('path');

module.exports = {
  entry: './src/index.js',  // Archivo de entrada principal
  output: {
    filename: 'bundle.js',  // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'),  // Directorio de salida
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Transpilar archivos JavaScript usando Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|glb|woff2|woff|ttf|eot|svg)$/,  // Manejar archivos estáticos
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),  // Servir archivos estáticos desde 'public'
    compress: true,  // Habilitar compresión gzip para todo el contenido servido
    port: 9000       // Puerto en el que se ejecutará el servidor de desarrollo
  }
};

