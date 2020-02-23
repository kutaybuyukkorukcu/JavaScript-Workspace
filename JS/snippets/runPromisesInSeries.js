// Runs an array of promises in series.

// Using reduce() to create a promise chain, where each promise returns the next promise when resolved.

const runPromisesInSeries = ps => ps.reduce(
                                (p, next) => p.then(next), Promise.resolve());

// Exp. 
  const delay = d => new Promise(r => setTimeout(r, d));
  runPromisesInSeries([() => delay(1000), () => delay(2000)]);
  // Each promise takes 3 secs to complete.
