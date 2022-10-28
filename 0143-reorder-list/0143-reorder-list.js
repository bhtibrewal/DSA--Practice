/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    // Step 1 -> find mid and split the LL into 2
    let mid = head, temp = head;
    while(temp && temp.next){
        mid = mid.next;
        temp = temp.next.next;
    }
    
    temp = mid.next;
    mid.next = null; // break the LL 
    mid = temp;

    // Step 2 -> reverse the nodes after mid
    mid = reverseList(mid);

    // Step 3 -> merge the two arr one item at a time

    while (mid){
        let temp = head.next;
        head.next = mid
        head = temp;
        
        temp = mid.next
        mid.next = head
        mid = temp
    }

};

var reverseList = function(head) {
    let reversed = null

    while(head){
        let node = head.next
        head.next = reversed;
        reversed = head;
        head = node;
    }
    
    return reversed;
};