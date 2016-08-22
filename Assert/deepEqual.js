const assert = require('assert');

var objOne = {
        a: {
            b: 1
        }
    },
    objTwo = {
        a: {
            b: 2
        }
    },
    objThree = {
        a: {
            b: 1
        }
    },
    objFour = Object.create(objOne);

assert.deepEqual(objOne, objOne); // OK

// assert.deepEqual(objOne, objTwo); //AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

assert.deepEqual(objOne, objThree); // OK

// assert.deepEqual(objOne, objFour); // AssertionError: { a: { b: 1 } } deepEqual {}
