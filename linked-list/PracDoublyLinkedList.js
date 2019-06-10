class Node {
    constructor(n) {
        this.val = n;
        this.prev = null,
            this.next = null;
    }
}

class DoubleyLinkedList {
    constructor(v) {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    addToHead(n) {
        var node = new Node(n);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            //  node.prev = this.tail;
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        console.log(this.tail)
        if (!this.head) return undefined;

        var popNode = this.tail;

        this.tail = popNode.prev;
        this.tail.next = null; //this.head.next.val;
        popNode.prev = null


        this.length--;
        console.log('POP---', this)
    }

    unshift(f){
        var n = new Node(f)
        var curr = this.head;
        this.tail.next = curr;
        //this.head.next = curr;
        n.next= curr;
        this.head.prev= n;
        this.head =n 

    }

    findInde(i){
        var current = this.head;

       var count = 0;

        while(count != i){
            current = current.next;
            count++;
        }
        return current
    }


    
    setInd(ind, val){
        var foundNode = this.findInde(ind);
        if(foundNode != null){
        foundNode.val = val;
        return true;
        }
        return false;

    }
}


// 0 <- 123

// 99  ->  Next 100 -> next 200

var a = new DoubleyLinkedList();
a.addToHead(3); // next 5[ next 9 and prev 3]
a.addToHead(5)
a.addToHead(9)
a.addToHead(10); // next 5[ next 9 and prev 3]
a.addToHead(11)
a.addToHead(12)
//a.pop()
a.unshift("whattt")
//a.findInde(1)
a.setInd(0, 333)
console.log(a)