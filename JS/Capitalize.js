// Capitalizes the first letter of a string.

// Using array destructuring and String.prototype.toUpperCase() to capitalize first letter, ...rest to get array of characters after first letter
// and then using join('') to make it a string again. Omit the lowerRest param to keep the rest of the string intact, or set it to true to convert to lowercase.

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
  
// Exp.
  capitalize('fooBar', true); 
  // 'Foobar'
