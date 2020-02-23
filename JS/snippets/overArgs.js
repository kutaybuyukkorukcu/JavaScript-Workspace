// Creates a function that invokes the provided function with it's arguments transformed.

const overArgs = (f, transforms) => (...args) => 
                                f(...args.map((value, i) => transforms[i](value)));
