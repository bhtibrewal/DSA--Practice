/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let nhead = [];
    nhead.next = head;
    let node = nhead, tail = nhead;

    while (n > 0) {
        node = node.next;
        n--
    }

    while (node.next !== null) {
        node = node.next;
        tail = tail.next;
    }

    tail.next = tail.next.next
    console.log(node, tail)

    return nhead.next;
};