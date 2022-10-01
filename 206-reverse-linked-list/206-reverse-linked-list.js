/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let reversed = null

    while (head) {
        let node = new ListNode(head.val);
        node.next = reversed;
        reversed = node;
        head = head.next;
    }
    return reversed;
};