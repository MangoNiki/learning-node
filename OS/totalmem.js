var os = require('os');

console.info(os.totalmem()); //8589934592

console.info(((os.freemem() / os.totalmem()) * 100).toFixed(2) + '%');
