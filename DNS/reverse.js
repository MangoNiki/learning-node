var dns = require('dns');

dns.reverse('121.199.170.10', function(err, hostnames) {
    console.info(hostnames);
});
