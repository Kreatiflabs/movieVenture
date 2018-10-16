const path = require('path');
/**
 * @path-dirAplikasi
 * */
module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: path.resolve(__dirname, '../', 'images'),
  fontsFolder: path.resolve(__dirname, '../', 'fonts'),
  cssFolder: path.resolve(__dirname, '../', 'css'),
  jsFolder: path.resolve(__dirname, '../', 'js'),
  scssFolder: path.resolve(__dirname, '../', 'sass'),
};
