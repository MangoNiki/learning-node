var fs = require('fs');

/**
 * 参数说明：
 * 	1.path：要打开的文件的文件路径
 *  2.flags：打开文件的方式 读/写
 * 		r：只读方式打开文件，如果文件不存在会抛出异常
 * 		r+：读写模式打开文件，如果文件不存在会抛出异常
 * 		rs：以同步只读的方式打开文件，如果文件不存在会抛出异常
 * 		rs+：以同步读写的方式打开文件，如果文件不存在会抛出异常
 * 		w：以写文件的模式打开文件，如果文件不存在则创建文件，如果存在则清空文件
 * 		w+：以读写文件的模式打开文件，如果文件不存在则创建文件，如果存在则清空文件
 * 		wx：以写的模式打开文件，如果文件不存在则创建文件，如果存在抛出异常
 * 		wx+：以读写的模式打开文件，如果文件不存在则创建文件，如果存在抛出异常
 * 		a：追加模式打开文件，如果不存在则创建文件
 * 		a+：读写和追加模式打开文件，如果不存在则创建文件
 * 		ax：追加模式打开文件，如果存在抛出异常
 * 		ax+：读写和追加模式打开文件，如果存在抛出异常
 * 		
 *  3.mode：设置文件的模式，读写执行(4-2-1)
 *  4.callback：打开文件的回调函数
 *  	function(err,fd){
 *  		//err:文件打开失败的错误信息，如果成功则为null
 *  		//fd:被打开文件的标识
 *  	}
 */
fs.open('test.txt','a+',function(err,fd){
	console.info(err);
	if(err){
		console.info('文件打开失败...');
	}else{
		console.info('文件打开成功...');
	}
});


