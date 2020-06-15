Returns the last key that satisfies the provided testing function. Otherwise undefined is returned.

Using keys(obj) to get all the properties of the object, reverse() to reverse their order and find() to test the provided function for each key-value pair.
The callback receives three arguments - value, key, object.

const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));
    
// Exp.
  
  findLastKey(
    {
      barney: { age : 36, active : true },
      fred: { age : 40, active : false },
      pebbles: { age : 1, active : true },
    },
    o => o['active']
  );
  // 'pebbles'
