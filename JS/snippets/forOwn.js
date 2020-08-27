// Iterates over all own properties of an object, running a callback for each one.

// Using Object.keys(obj) to get all the properties of the object, forEach() to run the provided func for each key-value pair.
// The callback receives 3 args - the value, the key and the object.

const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));

// Exp.
  forOwn({ foo : 'bar', a : 1 }, v => console.log(v));
  // 'bar', 1

// 🧙‍♂️👍 