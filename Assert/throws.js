const assert = require('assert');

assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  Error
);
// OK


assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  /value/
);
// OK

assert.throws(
  () => {
    throw new Error('Wrong valaue');
  },
  function(err) {
    if ( (err instanceof Error) && /value/.test(err) ) {
      return true;
    }
  },
  'unexpected error'
);
// Error: Wrong valaue
