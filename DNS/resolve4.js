var dns = require('dns');

dns.resolve4('90zl.com',function(){
	console.info(arguments);
});
