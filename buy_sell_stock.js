/**
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1321293590/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  let [left, right] = [0, 1];
  while (right <= prices.length) {
    if (prices[left] < prices[right]) {
      const curProfit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, curProfit);
    } else {
      left = right;
    }
    right += 1;
  }

  return maxProfit;
};
