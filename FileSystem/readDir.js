var fs  =require('fs');

fs.readdir('./test',function(err,files){
	if(err){
		console.info('读取目录失败...');
	}else{
		console.info(files);
	}
	
});