// Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.

// Using a try/catch block to return either the result of the function or an appropriate error.

const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

// Exp.
  var elements = attempt(function(selector) {
    return document.querySelectorAll(selector);
  }, '>_>');
  
  if (elements instanceof Error) {
    elements = [];
  }
  // elements = []
