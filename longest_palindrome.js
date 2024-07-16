/**
https://leetcode.com/problems/longest-palindrome/submissions/1322276049/
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }

  let maxLength = 0;
  let hasOdd = false;
  [...map.values()].forEach(val => {
    if (val % 2 === 0) {
      maxLength += val;
    } else {
      maxLength += val - 1;
      hasOdd = true;
    }
  });

  if (hasOdd) {
    maxLength += 1;
  }

  return maxLength;
};
