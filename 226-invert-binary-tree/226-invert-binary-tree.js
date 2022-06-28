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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return invert(root);
};

const invert =(root)=>{
    if (root == null) return null
    let left = root.left;
    root.left = invert(root.right);
    root.right = invert(left);
    return root
}