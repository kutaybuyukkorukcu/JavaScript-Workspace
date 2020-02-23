// Initializes a 2D array of given width and height and value.

// map() to generate h rows where each is a new array of size w initialize with value. If value is not provided, def to null.

const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
  
// Exp.
  initialize2DArray(2, 2, 0);
  // [[0,0], [0,0]]
