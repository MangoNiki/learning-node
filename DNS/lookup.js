var dns = require('dns');


//将一个域名（比如 'google.com'）解析为第一个找到的 A 记录（IPv4）或 AAAA 记录（IPv6）
dns.lookup('90zl.com',function(err,addresses,family){
	console.info('IP:' + addresses); //IP:120.24.175.165
	console.info('Family:IPv' + family); //Family:IPv4
});


dns.lookup('90zl.com',4,function(err,addresses){
	console.info(addresses); //120.24.175.165
});