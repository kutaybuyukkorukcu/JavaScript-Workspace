Returns the first key that satisfies the provided testing function. Otherwise undefined is returned.

Using keys() to get all the properties of the object, find() to test the provided function for each key-value pair. 
The callback receives three args -> value, key, object.

const findKey = (obj,fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

// Exp.

  findKey(
    {
      barney : { age : 36, active : true },
      fred : { age : 40, active : false },
      pebbles : { age : 1, active : true }
    },
    o => o['active']
  );
  
  // 'barney'
