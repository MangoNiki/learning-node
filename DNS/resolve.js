var dns = require('dns');

dns.resolve('90zl.com', 'A', function(err, addresses) {
    console.info(addresses);
    /*[
        { exchange: 'mxw.mxhichina.com', priority: 10 },
        { exchange: 'mxn.mxhichina.com', priority: 5 }
    ]*/
});
dns.resolve('90zl.com', 'AAAA', function(err, addresses) {
    console.info(addresses);
    /*[
        { exchange: 'mxw.mxhichina.com', priority: 10 },
        { exchange: 'mxn.mxhichina.com', priority: 5 }
    ]*/
});
dns.resolve('90zl.com', 'MX', function(err, addresses) {
    console.info(addresses); //[ '120.24.175.165' ]
});
