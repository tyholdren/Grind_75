/**
https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let maxLength = 0;
  const map = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }
    if (map.has(sum - k)) {
      maxLength = Math.max(maxLength, i - map.get(sum - k));
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLength;
};
