// Builds an array, using an iterator function and an initial seed value.

// Use a while loop and push() to call the function repeatedly until it returns false. The iterator function accepts one argument and must always return an array with two elements or false to terminate.

const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  // val[0] is shockingly null, i didn't know js had that.
  
  while (val = fn(val[1])) {
    result.push(val[0]);
  }
  
  return result;
}

// Exp.
  var f = n => (n > 50 ? false : [-n, n + 10]);
  unfold(f, 10); 
