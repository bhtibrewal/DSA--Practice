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
const levelOrder = function(root) {
    const result = [], queue=[root]; //FIFO
    
    while(queue[0]){
        const row=[]; let length = queue.length;
        
        while(length--){
            let curr = queue.shift();
            row.push(curr.val);
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }

       result.push(row);
    }
    return result;
};