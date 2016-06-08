const fs = require('fs');

const readStream = fs.createReadStream('../package.json', {
    flags: 'r',
    encoding: null,
    fd: null,
    mode: 0o666,
    autoClose: true
});

readStream.on('data', function(chunk) {
    console.info(chunk); 
    //<Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 6e 6f 64 65 2d 6c 65 73 73 6f 6e 22 2c 0a 20 20 22 76 65 72 73 69 6f 6e 22 3a 20 22 31 2e 30 2e 30 22 2c 0a 20 ... >
    

    console.info(chunk.toString());
    /*
    {
      "name": "node-lesson",
      "version": "1.0.0",
      "description": "this is my node lesson",
      "main": "index.js",
      "dependencies": {
        "async": "git+https://github.com/caolan/async.git",
        "cheerio": "^0.20.0",
        "eventproxy": "^0.3.4",
        "express": "^4.13.4",
        "superagent": "^1.8.3",
        "utility": "^1.8.0"
      },
      "devDependencies": {},
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "node"
      ],
      "author": "niki",
      "license": "ISC"
    }
     */
});
readStream.on('end', function() {
    console.info('finished...');
});
