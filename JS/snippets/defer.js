// Defers invoking a func until the current call stack has cleared.

// Using setTimeout() with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work.
// Also using (...) operator to supply the func with an arbitrary number of args.

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

// Exp.
  defer(console.log, 'a'), console.log('b');
  // logs 'b' then 'a'

// 🧙‍♂️👍