// Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
// Use a closure to call a stored key with stored arguments.

const call = (key, ...args) => context => context[key](...args);
