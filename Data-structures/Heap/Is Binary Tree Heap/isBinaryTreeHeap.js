/* 
    NOTE: Properties of a tree to be a max heap - Completeness and Value of node greater than or equal to its child.
 */

function countNodes(root) {
    if (root == NULL) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
}
// check completeness of tree
function isCBT( root, i,nodesCount) {
    // empty tree is complete
    if (root == NULL) return true;
    // If index assigned to
    // current node is more than
    // number of nodes in tree, then
    // tree is notcomplete
    if (i > nodesCount) 
    return false;
    
    return isCBT(root.left, 2*i, nodesCount) && isCBT(root.right, 2*i + 1, nodesCount);
}

// check Value of node greater than or equal to its child.
// this function is only called if the tree is CBT
function isMaxHeap( root) {
    if(root.left == NULL && root.right == NULL) 
    return true;
    // node will be in second last level
    if (root. right == NULL) 
        return root.left.key <= root.key;
        
    else
    return root.left.key <= root.key 
    && root.right.key<= root.key // check heap property at node
    && isMaxHeap(root.left) && isMaxHeap(root.right); // recur call for subtree
    
}
 // TC -> O(N)
function isHeap( root) {
    let i = 1; // we use 1 based inedxing here
    let nodesCount = countNodes(root);

    
     return isCBT(root, i, nodesCount) && isMaxHeap(root );
}