// Creates a function that invokes the method at a given key of an object.

// Returns a function that uses apply() to bind context[fn] to context.

const bindKey = (context, fn, ...boundArgs) => (...args) =>
  context[fn].apply(context, [...boundArgs, ...args]);
  
// Exp. 
  const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
  const freddyBound = bindKey(freddy, 'greet');
  console.log(freddyBound('hi', '!'));
  // 'hi fred!'
