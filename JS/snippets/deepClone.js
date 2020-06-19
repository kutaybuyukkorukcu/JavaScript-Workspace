// Creates a deep clone of an object.

// Using assign() and an empyt obj to create a shallow clone of the original. Using keys() and forEach() to determine which key-value pairs need to be deep cloned.
// Check if the passed obj is null and, if so, return null. 

const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

// Exp.

  const a = { foo: 'bar', obj: { a: 1, b: 2 } };
  const b = deepClone(a); 
