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
    if(!root) return root;
    console.log(root)
    helper(root);
    console.log(root);
    return root;
};
const helper=(node)=>{
    
    [node.left, node.right] = [node.right,node.left ]
    if(node.left) helper(node.left);
    if(node.right) helper(node.right);
}