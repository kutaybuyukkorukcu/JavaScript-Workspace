// Checks if the given argument is a readable stream.

// Checking if the value is different from null, typeof to check if the value is of type object and the pipe property is of type func.
// Also checking if the typeof _read and _readableState properties are func and obj respectively. 

const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';
  
// Exp. 
  const fs = require('fs');
  isReadableStream(fs.createReadStream('test.txt'));
  // true
