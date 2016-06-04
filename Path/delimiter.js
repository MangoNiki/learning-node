var path = require('path');

console.info("PATH 环境变量："+process.env.PATH);

console.info("路径分隔符" + path.delimiter);//获取文件分隔符

console.info(process.env.PATH.split(path.delimiter));