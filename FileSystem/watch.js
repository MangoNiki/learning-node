var fs = require('fs');

fs.watch('.',function(event,filename){
	if(filename){
		console.info(filename + ' ---> ' + event);
	}else{
		
	}
});