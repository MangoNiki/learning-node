var path = require('path');

console.info(path.isAbsolute('/foo/bar')); // true
console.info(path.isAbsolute('/baz/..')); // true
console.info(path.isAbsolute('qux/'));    // false
console.info(path.isAbsolute('.'));       // false