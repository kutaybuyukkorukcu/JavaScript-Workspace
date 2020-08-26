// Deep freezes an object.

// Using Object.keys() to get all the properties of the passed object and forEach() to iterate over them. 
// Object.freeze(obj) recursively on all properties, checking if each one is frozen using Object.isFrozen() and applying deepFreeze() as necessary.
// And finally using Object.freeze() to freeze the given object.

const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
        deepFreeze(v[prop]);
    }
  });
  return Object.freeze(obj);
};

// Exp.
    const o = deepFreeze([1, [2, 3]]);
    
    o[0] = 3; 
    o[1][0] = 4;
    
    // both not allowed


// 🧙‍♂️👍