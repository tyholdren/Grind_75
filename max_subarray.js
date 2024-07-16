/**
https://leetcode.com/problems/maximum-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let curSum = maxSum;

  for (let i = 1; i < nums.length; i += 1) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};
