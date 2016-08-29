var dns = require('dns');

//以字符串返回一个当前用于解析的 IP 地址的数组。
var servers = dns.getServers();

console.info(servers); //[ '208.67.222.222', '208.67.220.220' ]
