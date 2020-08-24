// Returns all unique values of an array, based on a provided comparator function.

// reduce() and some() for an array containing only the first unique occurrence of each value, based on the comparator function, fn.
// The comparator function takes two arguments : the values of the two elements being compared.

const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
  
// Exp.
  uniqueElementsBy(
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
      { id: 1, value: 'd' },
      { id: 0, value: 'e' }
    ],
    (a, b) => a.id == b.id
  ); 
  // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]

// 🧙‍♂️👍