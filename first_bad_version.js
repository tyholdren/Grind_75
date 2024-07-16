/**
https://leetcode.com/problems/first-bad-version/submissions/1322261944/
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;

    let firstVersion = n;

    let [left, right] = [0, n];
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        firstVersion = Math.min(firstVersion, mid);
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return firstVersion;
  };
};
