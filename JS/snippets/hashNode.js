// Creates a hash for a value using the SHA-256 algo. Returns a promise.

// Using crypto API to create a hash for the given value, setTimeout to prevent blocking on a long operation, and a Promise to give it a familiar interface.

const crypto = require('crypto');

const hashNode = val =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex')
        ), 
      0
    )
  );
 
// Exp.
  hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } }));
