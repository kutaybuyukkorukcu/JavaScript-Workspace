// Returns the number of times a function executed per second. hz is the unit for hertz, the unit of frequency defined as one cycle per second.

// Using performance.now() to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function iterations times.
// Return the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed.

const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};

// Exp.
  const numbers = Array(10000)
  .fill()
  .map((_, i) => i);
  
  const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
  
  Math.round(hz(sumReduce));
  // 572
