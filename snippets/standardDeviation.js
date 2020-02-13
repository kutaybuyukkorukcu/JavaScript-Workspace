// Returns the standard deviation of an array of numbers.

// Using reduce() to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then determine the starndard deviation.

const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), [])
      .reduce((acc, val) => acc + val, 0) / (arr.length - (usePopulation ? 0 : 1))
  );
};

// Exp.
  standardDeviation([10, 2, 38, 23, 38, 23, 21]);
  // 13.284434142114991 (sample)
