
function LinkedList() {
    this.head = null;
    this.tail = null;
}
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return value;
}

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head;
    
    while(currentNode) {
      if (currentNode.value === searchValue) return currentNode;
      currentNode = currentNode.next; 
    }
    return null;
  }

const otherlist = new LinkedList();
otherlist.addToHead(100);
// otherlist.addToHead(200);
// otherlist.addToHead(300);
// otherlist.addToTail(100);
// otherlist.addToTail(200);
otherlist.addToTail(8800);
console.log("SEARC __>",otherlist.search(8800)); // true

console.log(otherlist);
console.log(Node)