Returns the target value in a nested JSON object, based on the given key.

Using the in operator to check if target exists in obj. If found, return the value of obj[target], otherwise use values(obj) and reduce() to recursively call dig on each nested object until the first matching key/value pair is found.

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) {
          return acc;
        }
        
        if (typeof val === 'object') {
          return dig(val, target);
        }
      }, undefined);
      
// Exp.

  const data = {
    level1 : {
      level2 : {
        level3 : 'mock data',
      }
    }
  };
  
  console.log(dig(data, 'level3')); 
  // 'mock data'
