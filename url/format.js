var url = require('url');

var urlObj = {
    protocol: 'http',//可以省略 ://
    slashes: true,
    auth: null,
    host: 'html.90zl.com',//优先级比hostname高
    port: 3000,//只有在host为null的时候配合hostname使用
    hostname: 'html-css.90zl.com',//只有在host为null或者空的时候才会使用
    hash: 'basicinfo',//#可以省略
    search: '?name=bob',//优先级比query高，优先使用这个
    query: { name: 'niki' },//只有search为null或者空的时候才会使用
    pathname: '/getinfo',//可以省略“/”
    path: '/getuser?name=niki',//会被忽略
    href: 'htttp://html-css.90zl.com/getinfo?name=niki#basicinfo' //会被忽略
};

var urlStr = url.format(urlObj);
console.info(urlStr);
