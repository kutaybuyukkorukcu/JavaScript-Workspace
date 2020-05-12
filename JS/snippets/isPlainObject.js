// Checks if the provided value is an object created by the Object().

// Check if the provided value is truthy, using typeof, consturctor etc.

const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

// Exp.
    isPlainObject({ a: 1 }); 
    // true
