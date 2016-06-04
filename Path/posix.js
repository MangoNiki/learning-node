var path = require('path');

console.info(path.posix);
/*
{
    resolve: [Function],
    normalize: [Function],
    isAbsolute: [Function],
    join: [Function],
    relative: [Function],
    _makeLong: [Function],
    dirname: [Function],
    basename: [Function],
    extname: [Function],
    format: [Function],
    parse: [Function],
    sep: '/',
    delimiter: ':',
    posix: [Circular],
    win32: {
        resolve: [Function],
        normalize: [Function],
        isAbsolute: [Function],
        join: [Function],
        relative: [Function],
        _makeLong: [Function],
        dirname: [Function],
        basename: [Function],
        extname: [Function],
        format: [Function],
        parse: [Function],
        sep: '\\',
        delimiter: ';'
    }
}
*/


console.info(path.posix['delimiter']);