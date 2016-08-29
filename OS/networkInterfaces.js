var os = require('os');

console.info(os.networkInterfaces());

/*
{
    lo0: [{
        address: '::1',
        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        family: 'IPv6',
        mac: '00:00:00:00:00:00',
        scopeid: 0,
        internal: true
    }, {
        address: '127.0.0.1',
        netmask: '255.0.0.0',
        family: 'IPv4',
        mac: '00:00:00:00:00:00',
        internal: true
    }, {
        address: 'fe80::1',
        netmask: 'ffff:ffff:ffff:ffff::',
        family: 'IPv6',
        mac: '00:00:00:00:00:00',
        scopeid: 1,
        internal: true
    }],
    en0: [{
        address: 'fe80::aebc:32ff:febe:aeb9',
        netmask: 'ffff:ffff:ffff:ffff::',
        family: 'IPv6',
        mac: 'ac:bc:32:be:ae:b9',
        scopeid: 4,
        internal: false
    }, {
        address: '192.168.59.163',
        netmask: '255.255.255.0',
        family: 'IPv4',
        mac: 'ac:bc:32:be:ae:b9',
        internal: false
    }],
    awdl0: [{
        address: 'fe80::6057:4dff:fea3:2212',
        netmask: 'ffff:ffff:ffff:ffff::',
        family: 'IPv6',
        mac: '62:57:4d:a3:22:12',
        scopeid: 8,
        internal: false
    }]
}
*/
