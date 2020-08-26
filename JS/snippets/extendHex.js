// Extends a 3-digit color code to a 6-digit color code.

// Using map(), String.prototype.split() and join() to join the mapped array for converting 3-digit RGB notated hexadecimal color-code to the 6-digit form.
// slice() is used to remove # from string start since it's added once.

const extendHex = shortHex =>
  '#' + 
  shortHex
    .splice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
    
// Exp.

  extendHex('#03f');
  // '#0033ff'

// 🧙‍♂️👍 