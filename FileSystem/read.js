var fs = require('fs');

fs.open('test.txt','r',function(err,fd){
	if(err){
		console.info('文件打开失败...');
	}else{
		/**
		 * 读取文件
		 * 
		 * fs.read(fd, buffer, offset, length, position, callback)
		 * 		1.fd：通过open方法成功打开的一个文件的返回编号
		 * 		2.buffer：buffer对象
		 * 		3.offset：新的内容添加到bufferz中的起始位置
		 * 		4.length：添加到buffer中的内容长度
		 * 		5.position：读取的文件中的起始位置
		 * 		6.callback：读取文件的回调函数
		 * 			function(err, bytesRead, buffer){
		 * 				//err：错误信息
		 * 				//bytesRead：buffer的长度
		 * 				//buffer：buffer对象
		 * 			}
		 * @type {Buffer}
		 */
		var bf = new Buffer(10);
		fs.read(fd,bf,0,4,null,function(err, bytesRead, buffer){
			console.info(err);
			console.info(bytesRead);
			console.info(buffer);
		});
		
	}
});