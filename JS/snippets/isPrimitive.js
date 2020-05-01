// Returns a boolean determining if the passed value is primitive or not.

// Create an object from 'val' and compare it with 'val' to determine if the passed value is primitive.

// const isPrimitive = val => Object(val) !== val;

// Exp.
  isPrimitive(null); // true
  isPrimitive(undefined); // true
  isPrimitive(50); // true
  isPrimitive('Hello!'); // true
