var dns = require('dns');

dns.resolve4('90zl.com',function(err, addresses){
	console.info(addresses); //[ '120.24.175.165' ]
});
