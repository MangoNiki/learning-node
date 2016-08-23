var buf = new Buffer(30);

console.info(buf.length); // 30

buf.write('I Love Gina', 0, 'ascii')
console.info(buf.length); //30