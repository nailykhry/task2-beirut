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
  ceil: (n) => {
    return Math.ceil(n);
  },
  fibonacci: function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence.slice(0, n);
  },
};
