//退出触发
process.on('exit',function(){
	console.info('exit...');
});

//退出前触发
process.on('beforeExit',function(){
	console.info('beforeExit....');
});