var dns = require('dns');

dns.resolve('90zl.com','A',function(){
	console.info(arguments);
});
