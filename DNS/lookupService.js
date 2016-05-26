var dns = require('dns');

dns.lookupService('127.0.0.1',80,function(err,hostname,service){
	console.info(arguments);
});
