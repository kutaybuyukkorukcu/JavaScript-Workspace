// Creates a function that invokes each provided function with the arguments 
// it receives and returns the results.

const over = (...fnc) => (...args) => fnc.map(f => 
                                             f.apply(null, args));
