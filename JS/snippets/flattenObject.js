Flatten an object with the paths for keys.

Using keys(obj) combined with reduce() to convert every leaf node to a flattened path node. If the value of a key is an object, the func class itself with the appropriate prefix to create the path using assign(). 
Otherwise it adds the appropriate prefixed key-value pair to the accumulator object. You should always omit the 2nd arg, prefix, unless we want every key to have a prefix.

const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    
    return acc;
  }, {});
  
// Exp.

  flattenObject({ a : { b : { c : 1 } }, d : 1 }, "com.scalaxsoft");
  // { 'com.scalaxsoft.a.b.c' : 1, com.scalaxsoft.d : 1 }
