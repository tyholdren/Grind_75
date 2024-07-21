/**
https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const subset = [];

  const backtrack = curIndex => {
    if (curIndex > nums.length - 1) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[curIndex]);
    backtrack(curIndex + 1);
    subset.pop();

    backtrack(curIndex + 1);
  };

  backtrack(0);
  return result;
};
