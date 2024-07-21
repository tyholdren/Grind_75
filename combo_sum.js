/**
https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const results = [];
  const subset = [];
  let curSum = 0;

  function backtrack(i) {
    if (curSum > target || i > candidates.length - 1) {
      return;
    }

    if (curSum === target) {
      results.push([...subset]);
      return;
    }

    subset.push(candidates[i]);
    curSum += candidates[i];
    backtrack(i);

    subset.pop();
    curSum -= candidates[i];
    backtrack(i + 1);
  }

  backtrack(0);
  return results;
};
