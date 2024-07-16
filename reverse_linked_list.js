/**
https://leetcode.com/problems/reverse-linked-list/submissions/1322281329/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return head;

  let prev = null;
  let curNode = head;

  while (curNode !== null) {
    let temp = curNode.next;
    curNode.next = prev;
    prev = curNode;
    curNode = temp;
  }

  return prev;
};
