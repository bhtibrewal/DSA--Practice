/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = {}; let preorderIndex = 0
    
    for (let i in inorder)
        map[inorder[i]] = i;
    
    const arrayToTree = (left, right) => {
        if (left > right) return null;
        const rootValue = preorder[preorderIndex++];
        const root = new TreeNode(rootValue);
        const inorderIndex = +map[rootValue];
        root.left = arrayToTree(left, inorderIndex -1);
        root.right = arrayToTree(inorderIndex + 1, right);
        
        return root;
    }
    return arrayToTree(0, preorder.length - 1);
};

