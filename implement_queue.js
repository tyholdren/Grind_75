// https://leetcode.com/problems/implement-queue-using-stacks/submissions/1321347984/
var MyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.queue.length) {
    return this.queue.shift();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.queue.length) {
    return this.queue[0];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
