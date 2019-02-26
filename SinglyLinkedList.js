// 3
// 16
// 13
// 7
// 1
// 2{-truncated-}

// //OUTPUT - 16 13 1 7{-truncated-}

// 5
// 11
// 9
// 19
// 10
// 4
// 20
// 3{-truncated-}

// //OUTPUT 11 9 19 20 10 4{-truncated-}


// SinglyLinkedListNode {
//     data: 16,
//     next:
//      SinglyLinkedListNode { data: 13, next: SinglyLinkedListNode { data: 7, next: null } } }
//   data-- 1
//   position-- 2

function Node(val) {
    this.val = val
    this.next = null;
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        console.log('head-->', this.head)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }
        else {
            console.log(this.tail)
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
    }

    pop() {
        if (!this.head) return;
        var current = this.head;
        console.log('HHHH-->', this.head)
        var newTail = current
        while (current.next){
            newTail = current;
            current = current.next
        }
        console.log(current)
        console.log(newTail)

        this.tail = newTail
        this.tail.next = null
        // this.head = null
        this.length--;
    }
}
var t = new SinglyLinkedList()
//t.push('ASAS')
//t.push('BB')

//t.push('AA')

t.pop()

console.log(t)
