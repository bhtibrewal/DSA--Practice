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
 * @return {number[]}
 */

const preorderTraversal = (root)=>{
    const arr = [], stack=[]
    while(root!=null){
        arr.push(root.val);
        if(root.right!==null) stack.push(root.right);
        root = root.left;
        if(root==null) root = stack.pop();
    }
    return arr;
}
/* recurssive
var preorderTraversal = function(root) {
    const arr = [];
    helper(root, arr);
    return arr;
};
function helper(root, array){
    if(!root) return 
    array.push(root.val)
    root.left && helper(root.left, array)
    root.right && helper(root.right, array)
}
*/