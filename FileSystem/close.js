var fs = require('fs');


fs.open('./src/styles/index.css','a+','777',function(err,fd){

	var bf = new Buffer('body{color:#333;}');
	fs.write(fd,bf,0,bf.length,null,function(err, len, buffer){});

	fs.close(fd,function(err){
		if(err){
			console.info('文件关闭失败...');
		}else{
			console.info('文件关闭成功...');

			//以下内容没有被写入
			var bf = new Buffer('*{padding:0;margin:0;}');
			fs.write(fd,bf,0,bf.length,null,function(err, len, buffer){});
		}
	});
});