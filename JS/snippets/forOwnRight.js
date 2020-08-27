// Iterates over all own properties of an object in reverse, running a callback for each one.

// Using Object.keys(obj) to get all the properties of the obj, then using reverse() to reverse their order and forEach() to run the provided func for each key-value pair.
// The callback receives 3 args, the value, the key and the obj.

const forOwnRight = (obj, fn) => 
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));
    
// Exp.
  forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); 
  // 1, 'bar'

// 🧙‍♂️👍 