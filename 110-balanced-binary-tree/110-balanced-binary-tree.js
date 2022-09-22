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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null)  return true;
    
    if(height(root) == -1) return false;
    return true;
    
};

const height = (root)=>{
    if (root == null)  return 0;
    
    const left  = height(root.left) 
    const right = height(root.right)
    
    if(left == -1 || right == -1) return -1;
    
    const diff  = Math.abs(left - right)
    if (diff > 1) return -1
    
    return Math.max(left, right) + 1
}