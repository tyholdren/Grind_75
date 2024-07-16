/**
https://leetcode.com/problems/contains-duplicate/submissions/1322420088/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};
