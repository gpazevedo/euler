function largestPalindromeProduct(n) {
  let largest = 0;

  for (let i = 10 ** n - 1; i * i > largest; i--) {
    const number = findPalindrome(i);
    largest = number > largest ? number : largest;
  }
  return largest;
}

function findPalindrome(n) {
  for (let i = n; i > 0; i--) {
    if (isPalindrome(n * i)) return n * i;
  }
  return 0;
}

function isPalindrome(number) {
  const text = number.toString();

  for (let i = 0; i <= text.length / 2; i++) {
    if (text.charAt(i) != text.charAt(text.length - i - 1)) return false;
  }
  return true;
}
module.exports = { largestPalindromeProduct, isPalindrome, findPalindrome };
