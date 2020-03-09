// Creates a func that invokes 'fn' with partials appended to the args it receives.

// Using the (...) operator to append partials to the list of args of fn.

const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);

// Exp.
  const greet = (greeting, name) => greeting + ' ' + name + '!';
  const greetJohn = partialRight(greet, 'John');
  
  greetJohn('Hello');
  // 'Hello John!'
