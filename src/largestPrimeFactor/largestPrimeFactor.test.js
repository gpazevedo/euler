const { largestPrimeFactor, isPrime } = require("./largestPrimeFactor");

describe("largestPrimeFactor", () => {
  it("is Prime", () => {
    expect(isPrime(2)).toEqual(true);
  });

  it("is Prime", () => {
    expect(isPrime(3)).toEqual(true);
  });

  it("is Prime", () => {
    expect(isPrime(29)).toEqual(true);
  });

  it("is Prime", () => {
    expect(isPrime(6857)).toEqual(true);
  });

  it("is Prime", () => {
    expect(isPrime(23 * 23)).toEqual(false);
  });

  it("largestPrimeFactor(2)", () => {
    expect(largestPrimeFactor(2)).toEqual(2);
  });

  it("largestPrimeFactor(3)", () => {
    expect(largestPrimeFactor(3)).toEqual(3);
  });

  it("largestPrimeFactor(5)", () => {
    expect(largestPrimeFactor(5)).toEqual(5);
  });

  it("largestPrimeFactor(7)", () => {
    expect(largestPrimeFactor(7)).toEqual(7);
  });

  it("largestPrimeFactor(8)", () => {
    expect(largestPrimeFactor(8)).toEqual(2);
  });

  it("largestPrimeFactor(13195)", () => {
    expect(largestPrimeFactor(13195)).toEqual(29);
  });

  it("largestPrimeFactor(600851475143)", () => {
    expect(largestPrimeFactor(600851475143)).toEqual(6857);
  });
});
