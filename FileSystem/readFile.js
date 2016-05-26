var fs = require('fs');

var path = './test.tpl',
	options = {
		encoding : 'utf-8'
	};

fs.readFile(path, options,function(err,data){
	if(err){
		console.info('文件读取失败');
	}else{
		console.info(data);
	}
});

fs.readFile(path, 'utf-8',function(err,data){
	if(err){
		console.info('文件读取失败');
	}else{
		console.info(data);
	}
});