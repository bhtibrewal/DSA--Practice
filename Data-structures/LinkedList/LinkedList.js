function Node(value) {
    this.val = value;
    this.next = null;
  }
  
function LinkedList() {
this.head = null; // first element of the list
this.tail = null; // last element of the list

this.getValueAtIndex = (index) => {};

this.addAtTail = (value) => {
    const newNode = new Node(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
};
this.addAtHead = (value) => {
    const newNode = new Node(value);
    if (this.head) newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
};
this.insertAtIndex = (index, value) => {
    const newNode = new Node(value);
    let node = this.head;
    while (index--) {
    node = node.next;
    if (!node) return;
    }
    newNode.next = node.next;
    node.next = newNode;
};
this.toArray = () => {
    const element = [];
    let node = this.head;
    while (node) {
    element.push(node.val);
    node = node.next;
    }
    return element;
};
}

const linkedlist1 = new LinkedList();
linkedlist1.addAtTail(5);
linkedlist1.addAtTail(10);
linkedlist1.addAtHead(2);
linkedlist1.insertAtIndex(1, 9);
console.log(linkedlist1.toArray());
