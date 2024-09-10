module.exports = {
  sumOfCubes: (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += Math.pow(i, 3);
    }
    return sum;
  },
  squareRoot: (n) => {
    return Math.sqrt(n);
  },
  factorial: function faktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * faktorial(n - 1);
  },
  exponent: (base, exponent) => {
    return Math.pow(base, exponent);
  },
};
