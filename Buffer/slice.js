var buf = new Buffer(10);
buf.write('abcdefghj', 0, 'ascii');
console.log(buf.length); //10

buf = buf.slice(0, 5);
console.log(buf.length); //5
