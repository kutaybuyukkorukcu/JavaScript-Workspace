Returns the target value in a nested JSON object, based on the keys array.

Compare the keys you want in the nested JSON object as an Array. Using reduce() to get value from nested JSON object one by one. 
If the key exists in object, return target value, otherwise return null.

const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);

// Exp.
  let index = 2;
  
  const data = {
    foo : {
      foz : [1, 2, 3],
      bar : {
        baz : ['a', 'b', 'c']
      }
    }
  };
  
  deepGet(data, ['foo', 'foz', index]); // gets 3
