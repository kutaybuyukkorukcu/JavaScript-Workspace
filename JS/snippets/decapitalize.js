// Decapitalizes the first letter of a string.

// Using array destructuring and toLowerCase() to decapitalize first letter, ...rest to get array of characters after first letter and then join(') to make it a string again.
// Omit the upperRest parameter to keep the rest of the string intact, or set it to true to convert to uppercase.

const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
  
// Exp.
  decapitalize('FooBar');
  // 'fooBar'

// 🧙‍♂️👍