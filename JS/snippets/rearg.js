// Creates a function that invokes the provided function with it's arguments arranged according to the specified indexes.

const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));

Exp.
  var rearged = rearg(
    function(a, b, c) {
      return [a, b, c];
    },
    [2, 0, 1]
  );
  rearged('b', 'c', 'a');
