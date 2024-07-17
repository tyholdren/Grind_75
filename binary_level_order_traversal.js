/**
https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];

  const q = [root];
  const finalArray = [];
  let tempArray = [];
  let curCount = 1;

  while (q.length) {
    const curNode = q.shift();
    tempArray.push(curNode.val);
    curCount -= 1;

    if (curNode.left !== null) {
      q.push(curNode.left);
    }
    if (curNode.right !== null) {
      q.push(curNode.right);
    }

    if (curCount === 0) {
      finalArray.push(tempArray);
      tempArray = [];
      curCount = q.length;
    }
  }

  return finalArray;
};
