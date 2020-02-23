// Removes elements from an array for which the given function returns false.

// filter() to find array elements that return truthy values and reduce() to remove elements using splice(). The func is invoked with three arguments.

const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
    
// Exp.
  remove([1, 2, 3, 4], n => n % 2 === 0);
  // [2, 4]
