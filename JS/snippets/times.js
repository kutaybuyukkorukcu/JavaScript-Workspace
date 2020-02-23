// Iterates over a callback n times

// Using function.call() to call fn, n times or until it returns false.

const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

// Exp.
  var output = '';
  times(5, i => (output += i));
  console.log(output);
  // 01234
