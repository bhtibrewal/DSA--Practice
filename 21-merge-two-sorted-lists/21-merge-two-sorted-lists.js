/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var Node = function(value){
    this.val = value;
    this.next = null
}

var mergeTwoLists = function(node1, node2) {
    const merged = new ListNode();
    let node = merged
    
    while (node1!==null && node2!==null){
        if (node1.val <= node2.val) {
            node.next = new ListNode(node1.val);
            node1 = node1.next
        }
        else {
            node.next = new ListNode(node2.val);
            node2 = node2.next
        }
        node = node.next
    }
    
    if(node1){
        node.next = node1;
    }
    if(node2){
        node.next = node2;
    }
    
    return merged.next;
};