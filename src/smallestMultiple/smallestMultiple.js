function smallestMult(n) {
  let factors = new Map();

  for (let i = n; i > 2; i--) {
    if (!factors.get(i)) {
      factorsOf(i).forEach(function (value, key) {
        let oldValue = factors.get(key);
        oldValue = isNaN(oldValue) ? 0 : oldValue;

        if (value > oldValue) {
          factors.set(key, value);
        }
      });
    }
  }
  return Array.from(factors).reduce((acc, f) => (acc *= f[0] ** f[1]), 1);
}

function factorsOf(number) {
  const factors = new Map();
  let divider = 2;

  while (number >= divider) {
    if (number % divider === 0) {
      let qtd = factors.get(divider);
      factors.set(divider, qtd > 0 ? qtd + 1 : 1);

      number = number / divider;
    } else divider++;
  }
  return factors;
}
module.exports = { smallestMult, factorsOf };
