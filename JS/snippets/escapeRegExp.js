Escapes a string to use in a regex.

Using String.prototype.replace() to escape special characters.

const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Exp.
  
  escapeRegExp('(test)');
  // \\(test\\)
