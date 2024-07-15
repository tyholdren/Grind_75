/**
https://leetcode.com/problems/valid-parentheses/submissions/1321286774/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parensObj = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  for (let i = 0; i < s.length; i += 1) {
    if (parensObj.hasOwnProperty(s[i])) {
      const match = stack.pop();
      if (match !== parensObj[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
