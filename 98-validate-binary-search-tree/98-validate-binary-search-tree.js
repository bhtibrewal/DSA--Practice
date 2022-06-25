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
var isValidBST = function(root) {
    return helper(root, null, null)
};

const helper = (root, low, high)=>{
    if (root == null) return true;
    console.log("low:", low, "high: ", high)
    
    return ((low==null || root.val > low ) 
        && (high==null  || root.val < high) 
        && helper(root.left, low, root.val) 
        && helper(root.right, root.val, high))
}