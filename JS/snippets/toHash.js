// Reduces a given Array-like into a value hash.

// Given an Iterable or Array-like structure, call reduce.call() on the provided object to step over it and return an Object, keyed by the reference value.

const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
  
// Exp.
  toHash([{ a: 'label' }], 'a'); 
  // { label: { a: 'label' } }
  toHash([4, 3, 2, 1]);
  // { 0: 4, 1: 3, 2: 2, 3: 1 }
