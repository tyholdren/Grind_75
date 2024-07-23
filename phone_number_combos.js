/**
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const charMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const combos = [];
  let curCombo = '';

  if (digits.length === 0) return combos;

  function getCombos(digitIndex) {
    if (curCombo.length === digits.length) {
      combos.push(curCombo);
      return;
    }

    const curValues = charMap[digits[digitIndex]];

    for (let i = 0; i < curValues.length; i += 1) {
      curCombo += curValues[i];
      getCombos(digitIndex + 1);
      curCombo = curCombo.slice(0, curCombo.length - 1);
    }
  }

  getCombos(0);
  return combos;
};
