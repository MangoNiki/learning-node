var fs = require('fs');

/**
 * 同步方式创建目录
 * 
 * fs.mkdirSync(path[, mode])
 * 
 * 	path：文件夹名称
 * 	mode：文件夹权限
 * 
 * 如果文件夹不存在则返回undefined
 * 如果文件夹存在返回异常信息
 */
var res = fs.mkdirSync('src','0777');
console.info(res);