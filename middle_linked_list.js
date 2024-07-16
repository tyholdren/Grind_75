/**
https://leetcode.com/problems/middle-of-the-linked-list/submissions/1322419422/
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
var middleNode = function (head) {
  let [slow, fast] = [head, head];
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast.next === null) {
    return slow;
  }
  return slow.next;
};
