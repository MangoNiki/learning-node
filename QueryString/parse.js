var querystring = require('querystring');

var str1 = 'foo=bar&baz=qux&baz=quux&corge=';
var str2 = 'foo=bar,baz=qux,baz=quux,corge=';
var str3 = 'foo:bar,baz:qux,baz:quux,corge:';
var queryObj1 = querystring.parse(str1);
var queryObj2 = querystring.parse(str2);
var queryObj3 = querystring.parse(str3);
console.info(queryObj1); //{ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }
console.info(queryObj2); //{ foo: 'bar,baz=qux,baz=quux,corge=' }
console.info(queryObj3); //{ 'foo:bar,baz:qux,baz:quux,corge:': '' }

queryObj2 = querystring.parse(str2, ',');
console.info(queryObj2); //{ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }

queryObj3 = querystring.parse(str3, ',', ':');
console.info(queryObj3); //{ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }

var str4 = 'name%3D%E5%90%8D%E5%AD%97&foo=bar';
queryObj4 = querystring.parse(str4, null, null, {
    decodeURIComponent: querystring.unescape
});
console.info(queryObj4); //{ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' ,name:'名字'}

