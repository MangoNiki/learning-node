var path = require('path');

var filename = __filename;
console.info("原文件名称：" + filename);

console.info(path.basename(filename));//获取一个文件的文件名

console.info(path.basename(filename, '.js'));//获取一个去除后缀名的文件名
