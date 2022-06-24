/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    console.log(head)
    if(!head || !head.next || k < 1) return head;
    
    let node = head, count=1
    // count no of nodes
    while(node.next){
       node = node.next;
        count++;
    }
    console.log(count, "count");
    node.next = head;
   
    k = count - k % count -1
    console.log(k, "k")
    
    node = head
    while(k--){
        node = node.next 
    }    

    const store = node.next;
    node.next = null;
    
    return store
};