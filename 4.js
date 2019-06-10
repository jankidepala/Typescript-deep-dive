
// 4. Given a pointer to the nth node in the linked list, 
// how do you delete it in O(1)? 
// Example: Create a simple linked list of 5 elements and then delete the 3rd node.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addNode(n) {
        let n1 = new Node(n)
        if (!this.head) this.head = n1;
        else {
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next
            }
            tail.next = n1;
        }
        this.length++;
    }
    deleteThis(node) {
        var nod = this.head;
        while (nod.next != null) {
            if (nod.next.val == node) {
                delete nod.next.val

            }
            
            console.log("NNNNN", nod)
            break;
        }
       
        this.length--;
    }
}

var linkedL = new LinkedList;

linkedL.addNode(2)
linkedL.addNode(11)
linkedL.addNode(16)
linkedL.addNode(21)
linkedL.addNode(36)
linkedL.deleteThis(16)

console.log(linkedL)