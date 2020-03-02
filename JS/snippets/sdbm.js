// Hashes the input string into a whole number.

// Using split('') and reduce() to create a hash of the input string, utilizing bit shifting.

const sdbm = str => {
  let arr = str.split('');
  return arr.reduce((hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode), 0
  );
};

// Exp.
  sdbm('name');
  // -3521204949
