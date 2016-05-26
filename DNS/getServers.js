var dns = require('dns');


var servers = dns.getServers('90zl.com');

console.info(servers);
