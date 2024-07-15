/**
https://leetcode.com/problems/valid-anagram/submissions/1321300593/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return [...map.values()].every(val => val === 0);
};
