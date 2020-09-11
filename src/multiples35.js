function multiplesOf3and5(number) {
  // Good luck!
  const sumFor3 = sumOfMultiplesof(3, number);
  const sumFor5 = sumOfMultiplesof(5, number);
  const sumFor15 = sumOfMultiplesof(15, number);
  return sumFor3 + sumFor5 - sumFor15;
}

function sumOfMultiplesof(divider, number) {
  const quotient = Math.floor((number - 1) / divider);
  if (quotient === 0) return 0;

  return ((divider + quotient * divider) / 2) * quotient;
}
module.exports = { multiplesOf3and5 };
