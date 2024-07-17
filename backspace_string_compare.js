/**
https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const POUND = '#';

  const convertString = (s, stack) => {
    for (const char of s) {
      if (char === POUND && stack.length) {
        stack.pop();
      } else if (char !== POUND) {
        stack.push(char);
      }
    }

    return stack.join('');
  };

  const firstString = convertString(s, []);
  const secondString = convertString(t, []);
  return firstString === secondString;
};
