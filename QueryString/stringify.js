var querystring = require('querystring');

var queryObj = { foo: 'bar', baz: ['qux', 'quux'], corge: '', name: '名字' };

var str = querystring.stringify(queryObj);
console.info(str); //foo=bar&baz=qux&baz=quux&corge=&name=%E5%90%8D%E5%AD%97

str = querystring.stringify(queryObj, ',');
console.info(str); //foo=bar,baz=qux,baz=quux,corge=,name=%E5%90%8D%E5%AD%97

str = querystring.stringify(queryObj, ',', ':');
console.info(str); //foo:bar,baz:qux,baz:quux,corge:,name:%E5%90%8D%E5%AD%97

str = querystring.stringify(queryObj, ',', ':', {
    encodeURIComponent: querystring.escape
});//foo:bar,baz:qux,baz:quux,corge:,name:%E5%90%8D%E5%AD%97

console.info(str);
