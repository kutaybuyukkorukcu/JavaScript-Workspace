// Checks if the given arg is a duplex stream.

// Check if the value is different from null, use typeof to check if a value is of type object and the pipe property is of type function.
// Additionally check if the typeof the _read, _write, _readableState and _writableState properties are function and object respectively.

const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
  
// Exp.
  const Stream = require('stream');
  isDuplexStream(new Stream.Duplex());
  // true
