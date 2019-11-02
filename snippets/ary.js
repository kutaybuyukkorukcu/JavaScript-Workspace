// Creates a function that accepts up to n arguments, ignoring any additional arguments.
// Call the provided function, func, with up to n arguments, using Array.prototype.slice(0, n) and the spread operator


const ary = (func, n) => (...args) => func(...args.slice(0, n));
