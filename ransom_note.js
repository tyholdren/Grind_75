/**
https://leetcode.com/problems/ransom-note/submissions/1322265280/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();

  for (const char of magazine) {
    magazineMap.set(char, magazineMap.get(char) + 1 || 1);
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    const curChar = ransomNote[i];
    if (!magazineMap.has(curChar)) {
      return false;
    }
    magazineMap.set(curChar, magazineMap.get(curChar) - 1);
    if (magazineMap.get(curChar) === 0) {
      magazineMap.delete(curChar);
    }
  }

  return true;
};
