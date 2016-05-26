var dns = require('dns');


dns.lookup('90zl.com',function(err,addresses,family){
	console.info(arguments);
});
