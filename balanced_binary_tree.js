/**
https://leetcode.com/problems/balanced-binary-tree/submissions/1321343686/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;
  let isBalanced = true;

  const traverse = root => {
    if (root === null) return 0;

    let left = traverse(root.left);
    let right = traverse(root.right);

    if (Math.abs(left - right) >= 2) {
      isBalanced = false;
      return;
    }

    return Math.max(left, right) + 1;
  };

  traverse(root);
  return isBalanced;
};
