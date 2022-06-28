/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//                r                                    r
// inorder = [[9],3,[15,20,7]], postorder = [9,15,7,20,3]
var buildTree = function(inorder, postorder) {
    const map = {}; let postorderIndex = postorder.length -1
    
    for (let i in inorder)
        map[inorder[i]] = i;
    console.log(postorderIndex, map)
    
    const arrayToTree = (left, right) => {
        if (left > right) return null;
        const rootValue = postorder[postorderIndex--];
        const root = new TreeNode(rootValue);
        const inorderIndex = +map[rootValue];
        
        root.right = arrayToTree(inorderIndex + 1, right);
        root.left = arrayToTree(left, inorderIndex -1);
        
        return root;
    }
    return arrayToTree(0, postorder.length - 1);
};