var path = require('path');



//从最后一个“.”到文件名称字符串末尾，输出文件的后缀名，
//如果文件名称没有“.”或者以“.”开头则返回空字符串
console.info(path.extname('index.html')); // 输出   .html
console.info(path.extname('webpack.config.js')); // 输出  .js
console.info(path.extname('.gitignore'));
console.info(path.extname('index.'));// 输出   .
console.info(path.extname('.index'));
console.info(path.extname('index'));
console.info(path.extname('.'));


