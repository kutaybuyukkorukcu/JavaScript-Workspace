// Takes any number of iterable objects or objects with a length property and returns the longest one. If multiple objects have the same length, the first one will be returned. Returns undefined if no arguments are provided.

// reduce() function comparing the length of objects to find the longest one.

const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x :a));

// Exp.
  longestItem('this', 'is', 'a', 'testcase');
  // 'testcase'
  longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]);
  // [1, 2, 3, 4, 5]
