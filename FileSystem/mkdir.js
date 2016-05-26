var fs = require('fs');

/**
 * 异步方式创建文件夹
 *
 * fs.mkdir(path[, mode], callback)
 *
 * 	Path：文件夹名称
 * 	mode：创建文件夹的权限
 *  callback：穿件文件夹的回调函数
 *
 * 如果文件夹存在则会发生错误信息
 *
 */
fs.mkdir('src','777',function(err){
	if(err){
		console.info('目录创建失败');
	}
});