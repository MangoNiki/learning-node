const assert = require('assert');

assert.deepEqual({ a: 1 }, { a: '1' }); // OK
assert.deepStrictEqual({ a: 1 }, { a: '1' }); //AssertionError: { a: 1 } deepStrictEqual { a: '1' }
