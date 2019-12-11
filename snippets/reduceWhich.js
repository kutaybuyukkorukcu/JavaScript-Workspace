// Returns the min / max value of an array, after applying the provided function to set comparing rule.

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
  
// Exp.
  reduceWhich(
    [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
    (a, b) => a.age - b.age
  ); 
  // {name: "Lucy", age: 9}
