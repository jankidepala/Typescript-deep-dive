// var l1 = ListNode {
//     val: 1,
//     next: ListNode { val: 2, next: ListNode
//     { val: 4, next: null } } }
// Driver program to test above functions 
// int main() 
// { 
// 	Node* head1 = newNode(1); 
// 	head1->next = newNode(2); 
// 	head1->next->next = newNode(3); 
// 	head1->next->next->next = newNode(4); 
// 	head1->next->next->next->next = newNode(5); 
// 	head1->next->next->next->next->next = newNode(6); 
// 	head1->next->next->next->next->next->next = newNode(7); 
// 	head1->next->next->next->next->next->next->next = newNode(8); 

// } 

//     ListNode {
//     val: 1,
//     next: ListNode { val: 3, next: ListNode { val: 4, next: null } } }

class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    deleteAt(i){
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

      if(i === 0){
          this.head = this.head.next;
          return
      }

      const prev = this.getAt(i);
      console.log('------', prev)
      if( !prev || !prev.next){
          return;
      }

      prev.next = prev.next.next;
      return this.head;
            
       
    }
    deletelastNode() {
        let node = this.head;
        if (!node.next) {
            return;
        }

        let prev = this.head;
        let tail = node.next;

        while (tail.next) {
            prev = tail;
            tail = tail.next;
        }

        prev.next = null;
        return this.head;
    }

    deleteFirstNode() {
        let node = this.head;
        if (node.data) {
            node = node.next;
        }
        return node;
    }
    getAt(index) {

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
            console.log("=", node)
        }
        return null;
    }
    insertAtEnd(d) {
        var newNode = new Node(d);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let tail = this.head;
        while (tail.next != null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head

    }
}

var mergeTwoLists = function (l1, l2) {
    var dummy = new Node(l1);

}

var l = new LinkedList();
console.log(l.insertAtEnd(3))
console.log(l.insertAtEnd(5))
console.log(l.insertAtEnd(7))
console.log(l.insertAtEnd(9))

console.log("GETAT:", l.getAt(0))
console.log(l.deleteAt(1))

var removeNthFromEnd = function(head, n) {
    var left, before, right = head;
    left = before = {next: head}; 
    while (n--) right = right.next;
    while (right) {
      right = right.next;
      left = left.next;
    }
    left.next = left.next.next;
    return before.next;
  };
var n = new Node(2)
  console.log(removeNthFromEnd(n , 2))
