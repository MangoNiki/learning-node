var fs = require('fs');

fs.open('./src/styles/index.css','w',function(err,fd){
	if(err){
		console.info('文件打开失败...');
	}else{
		console.info('文件打开成功...');

		var bf = new Buffer('*{padding:0;margin:0;}');

		//fs.write(fd, buffer, offset, length[, position], callback)
		var res = fs.writeSync(fd,bf,0,bf.length,null);
		console.info(res);//写出成功则返回写入内容长度，失败则返回错误信息
	}
});


fs.open('./src/styles/main.css','w',function(err,fd){
	if(err){
		console.info('文件打开失败...');
	}else{
		console.info('文件打开成功...');

		var str = '*{padding:0;margin:0;}';

		//fs.write(fd, data[, position[, encoding]], callback)
		var res = fs.writeSync(fd,str,null,'utf-8');
		console.info(res);//写出成功则返回写入内容长度，失败则返回错误信息
	}
});

