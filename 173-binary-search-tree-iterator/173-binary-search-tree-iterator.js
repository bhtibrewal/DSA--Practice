/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const inOrderTranversal = (node, stack) => {
    if (node.left) inOrderTranversal(node.left, stack);
    stack.push(node.val);
    if (node.right) inOrderTranversal(node.right, stack);
}
var BSTIterator = function(root) {
    var stack = [];
    inOrderTranversal(root, stack);
    this.data = stack;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    console.log(this.data, "data")
    return this.data.shift();
};

/**
 * @return {boolean}
 */

BSTIterator.prototype.hasNext = function() {
    return this.data.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */