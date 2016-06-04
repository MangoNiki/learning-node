var path = require('path');

console.info(path.normalize("/foo/bar//baz/asdf/quux/.."));//输出“/foo/bar/baz/asdf”

console.info(path.normalize("/foo/bar//baz/asdf/quux/."));//输出”/foo/bar/baz/asdf/quux“



