var buf = new Buffer(10);
buf.fill('@');
console.info(buf); //<Buffer 40 40 40 40 40 40 40 40 40 40>

buf.write('$');
console.info(buf.toString('ascii')); //$@@@@@@@@@

buf.write('*', 3, 4);
console.info(buf.toString('ascii')); //$@@*@@@@@@
