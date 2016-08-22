const assert = require('assert');

assert.equal(1, 1); // OK
assert.equal(1, '1'); //OK

// assert.equal(1,2); //AssertionError: 1 == 2

assert.equal({ a: 1 }, { a: 1 }); //AssertionError: { a: 1 } == { a: 1 }
