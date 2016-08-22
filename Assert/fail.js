const assert = require('assert');


assert.fail(1, 2, undefined, '<'); // AssertionError: 1 < 2
assert.fail(1, 2, 'litter', '<'); // AssertionError: litter

assert.fail(1, 2, undefined, '>'); // AssertionError: 1 > 2
assert.fail(1, 2, 'larger', '>'); // AssertionError: larger
