const buf = new Buffer('hello 你好！');

console.info(buf.toString()); // hello 你好！
console.info(buf.toString('ascii')); // hello d= e%=o<
console.info(buf.toString('utf8')); //hello 你好！
console.info(buf.toString('utf16le')); //敨汬⁯뷤붥볯
console.info(buf.toString('ucs2')); //敨汬⁯뷤붥볯
console.info(buf.toString('base64')); //aGVsbG8g5L2g5aW977yB
console.info(buf.toString('binary')); //hello ä½ å¥½ï¼
console.info(buf.toString('hex')); //68656c6c6f20e4bda0e5a5bdefbc81
