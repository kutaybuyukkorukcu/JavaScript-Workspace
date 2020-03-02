// Evaluates the binomial coefficient of two integers n and k.

// Using isNaN() to check if any of the two values is NaN. Check if k is less than 0, greater than or equal to n, equal to 1 or n - 1 and return the appropriate result. yada yada And other cases :)

const binomialCoefficient = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};

// Exp.
  binomialCoefficient(8, 2);
  // 28
