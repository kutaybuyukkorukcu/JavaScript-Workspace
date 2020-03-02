// Initializes an array containing the numbers in the specified range where start and end are inclusive and the ratio between two terms is step. Returns an error if step = 1.

// Using from(), Math.log(), Math.floor() to create an array of the desired length, map() to fill with the desired values in a range. Induct 1 for the 2nd parameter start and 2 for the 3rd paramater step as default.

const geometricProgression = (end, start = 1, step = 2) => {
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => (start * step) ** i
  );
}  

// Exp.
  geometricProgression(256);
  // [1, 2, 4, 8, 16, 32, 64, 128, 256]
