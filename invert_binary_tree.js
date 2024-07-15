/**
https://leetcode.com/problems/invert-binary-tree/submissions/1321298998/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root;

  let tempLeft = root.left;
  root.left = root.right;
  root.right = tempLeft;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
