var express = require('express'),
	utility = require('utility');

var app = new express();

app.get('/',function(req,resp){
	
	var name = req.query.name;
	
	for(var i in req){
		console.info(i);
	}

	var encodeName = utility.md5(name);

	resp.send(encodeName);

}).listen(3000,function(){
	console.info('app is listening at port 3000');
});
