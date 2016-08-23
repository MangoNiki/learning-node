var buf = new Buffer('this is a buffer');

buf.includes('this');
buf.includes('is');
buf.includes(new Buffer('a buffer'));
buf.includes(97);
buf.includes(new Buffer('a buffer example'));
buf.includes(new Buffer('a buffer example').slice(0, 8));
buf.includes('this', 4);