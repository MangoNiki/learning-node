const assert = require('assert');

// assert.ifError(1); // Throws 1
// assert.ifError(0); // OK
// assert.ifError('error'); // Throws error
assert.ifError(new Error()); // Throws Error