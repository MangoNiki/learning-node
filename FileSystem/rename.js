var fs = require('fs');

/**
 * 对文件或者文件夹进行重命名操作
 * 
 * fs.rename(oldPath, newPath, callback)
 *
 * 	1.oldPath：要进行重命名的文件
 * 	2.newPath：要重命名的文件名称
 * 	3.callback：重命名的回调函数
 *  	function(err){
 *  		//err：错误信息
 *  	}
 *  
 */
fs.rename('./srcFile.txt','./destFile.text',function(err){
	console.info(err);
});