//DDL( head[node - prev and next ], tail[node], length )
//NOde [data, next, prev]
// head - next and no prev
//tail - prev pointer but no next one

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
}
DoublyLinkedList.prototype.addToHead = function(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode; 
    this.head = newNode;
  };
var t = new DoublyLinkedList();
t.addToHead("ASASA")
t.addToHead("BB")
t.addToHead("CCC")

console.log(t)

