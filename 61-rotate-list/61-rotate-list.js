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
var rotateRight = function (head, k) {

    if (!head || !head.next || k < 1) return head;

    let node = head, count = 1
    // count the length of list
    while (node.next) {
        node = node.next;
        count++;
    }
    // node points at tail node
    // make the list circular by making tail.next = head
    node.next = head;

    // find the k by taking its modulas 
    k = count - k % count - 1
    console.log(k, "k")

    // go to kth node and break the circle 
    node = head
    while (k--) {
        node = node.next
    }

    const newHead = node.next;
    node.next = null;

    return newHead
};