var path = require('path');

var filename = __filename;
console.info("原文件名称：" + filename);

console.info(path.dirname(filename));//获取一个文件所在的路径（不包括文件本身）

