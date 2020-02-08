// Creates a function that invokes func with partials prepended to the args it receives.

// Using the spread (...) ops to prepend partials to the list of the args of func.

const partial = (func, ...partials) => 
              (...args) => func(...partials, ...args);
              
// Exp.
  const greet = (greeting, name) => greeting + ' ' + name + '!';
  const greetHello = partial(greet, 'Hello');
  greetHello('Kutay');
  // 'Hello Kutay!'
