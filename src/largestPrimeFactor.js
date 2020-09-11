function largestPrimeFactor(number) {
  const limit = Math.floor(Math.sqrt(number));
  let biggest = 0;

  for (let factor = 2; factor <= limit; factor++) {
    if (number % factor === 0) {
      if (isPrime(factor)) {
        if (isPrime(number / factor)) return number / factor;
        else biggest = factor;
      }
    }
  }
  return biggest > 0 ? biggest : number;
}

function isPrime(number) {
  const limit = Math.floor(Math.sqrt(number));

  for (let factor = 2; factor <= limit; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

largestPrimeFactor(13195);

module.exports = { largestPrimeFactor, isPrime };
