var fs = require('fs');

fs.open('./src/styles/index.css','w',function(err,fd){
	if(err){
		console.info('文件打开失败...');
	}else{
		console.info('文件打开成功...');

		var bf = new Buffer('*{padding:0;margin:0;}');

		//fs.write(fd, buffer, offset, length[, position], callback)
		fs.write(fd,bf,0,bf.length,null,function(err, len, buffer){
			//err：错误信息
			//len：写入的文件长度
			//buffer：写入文件的buffer对象
		});
	}
});


fs.open('./src/styles/main.css','w',function(err,fd){
	if(err){
		console.info('文件打开失败...');
	}else{
		console.info('文件打开成功...');

		var str = '*{padding:0;margin:0;}';

		//fs.write(fd, data[, position[, encoding]], callback)
		fs.write(fd,str,null,'utf-8',function(err, len, str){
			//err：错误信息
			//len：写入的文件长度
			//str：写入的内容
		});
	}
});

