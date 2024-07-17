/**
https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1323500753/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) return s.length;
  let left = 0;
  let maxLength = 0;
  let set = new Set();

  for (let i = 0; i < s.length; i += 1) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[i]);
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
};
