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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = [], queue=[root];
    let zigzag = true;
    
    while(queue[0]){
        const row=[]; let length = queue.length;
        
        while(length--){
            let curr = queue.shift();
            zigzag ? row.push(curr.val): row.unshift(curr.val)
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }
        zigzag = !zigzag
       result.push(row);
    }
    return result;
};