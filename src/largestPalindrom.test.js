const {
  largestPalindromeProduct,
  isPalindrome,
  findPalindrome,
} = require("./largestPalindrom");

describe("largestPalindromeProduct", () => {
  it("is Palindrome", () => {
    expect(isPalindrome(5)).toEqual(true);
  });
  it("is Palindrome", () => {
    expect(isPalindrome(22)).toEqual(true);
  });
  it("is Palindrome", () => {
    expect(isPalindrome(1231)).toEqual(false);
  });
  it("is Palindrome", () => {
    expect(isPalindrome(9009)).toEqual(true);
  });
  it("is Palindrome", () => {
    expect(isPalindrome(906609)).toEqual(true);
  });
  it("is Palindrome", () => {
    expect(isPalindrome(902109)).toEqual(false);
  });
  it("find Palindrome 99", () => {
    expect(findPalindrome(99)).toEqual(9009);
  });
  it("find Palindrome 12", () => {
    expect(findPalindrome(12)).toEqual(0);
  });

  it("largestPalindromeProduct 2", () => {
    expect(largestPalindromeProduct(2)).toEqual(9009);
  });
  it("largestPalindromeProduct 3", () => {
    expect(largestPalindromeProduct(3)).toEqual(906609);
  });
});
