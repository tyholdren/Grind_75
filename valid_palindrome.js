/**
https://leetcode.com/problems/valid-palindrome/submissions/1321295220/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const clean = s.replace(/[^a-zA-Z0-9]/gi, '');

  let [left, right] = [0, clean.length - 1];

  while (left <= right) {
    if (clean[left].toLowerCase() !== clean[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};
