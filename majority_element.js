/**
https://leetcode.com/problems/majority-element/submissions/1322284192/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const size = nums.length / 2;

  const map = new Map();
  nums.forEach(el => {
    map.set(el, map.get(el) + 1 || 1);
  });

  const keys = [...map.keys()];

  for (const key of keys) {
    if (map.get(key) > size) {
      return key;
    }
  }
};
