// Splits values into two groups according to a predicate function, which specifies which group an element 
// in the input collection belongs to. If the predicate function returns a truthy value, the collection element 
// belongs to the first group; otherwise, it belongs to the second group.

// Same as bifurcate.js

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val) ? 0 : 1].push(val), acc), [[], []]);
  
// Exp.
  bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
  // [ ['beep', 'boop', 'bar'], ['foo'] ]

// 🧙‍♂️👍