// Creates a function that invokes fn with a given context, optionally adding any additional supplied parameters to the beginning of the args.

// Return a function that uses apply() to apply the given context to fn. Use concat() to prepend any additional supplied params to the args.

const bind = (fn, context, ...boundArgs) => (...args) =>
            fn.apply(context, [...boundArgs, ...args]);
            
// Exp.
  function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
  const freddy = { user : 'fred' };
  const freddyBound = bind(greet, freddy);
  freddyBound('hi', '!');
  // 'hi fred!'
