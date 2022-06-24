## Attempt 1
```
while(k--){
let node = head
while(node.next && node.next.next){
node = node.next
}
const store = node.next;
node.next = null;
store.next=head;
head = store
}
```
## Attempt 2
​
```
var rotateRight = function(head, k) {
console.log(head)
if(!head || !head.next || k < 1) return head;
let node = head, count=1
while(node.next){
node = node.next;
count++;
}
console.log(count, "count");
//
k = count - (k%count) - 1;
console.log(k, "k")