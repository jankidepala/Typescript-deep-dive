/**
LINKED LIST
    -> node -> node -> node -> node
    NODE - data, next
data stores a value.
next points to the next node in the list.
------SinglyList---------
_length - retrieves the number of nodes in a list.
head -assigns a node as the head of a list.
add(value) - adds a node to a list.
searchNodeAt(position)- searches for a node at n-position in our list.
remove(position) - removes a node from a list.
 */
//S LInkedList - lholds a sequence of linked nodes
//Each node, in turn, contains data and a pointer, which can point to another node
//first node - head
//last node - head
//each node has a pointer
//Node [data, next[data, next[data, next]]]
//SING{ length, head: {Node{}} }
class Node {
    constructor(data) {
        this.data = data; //data in node stream
        this.next = null; //pointer to next node
    }
}
class SingleLInked {
    constructor() {
        this._length =0;
        this.head = null;
    }
    add(d) {
        //Sing{ length, next[]node[data, next[Node] ]}
        var node = new Node(d)
        var currentNode = this.head; // [null]
        console.log(currentNode) //null
        if(!currentNode){ 
            //add d to head - 
            this.head = node; //this.head = [Node]
            this._length+=1; 
            return ;
        }
        console.log(currentNode)
        while( currentNode.next){
            currentNode = currentNode.next;
            this._length+=1;
            //head - add 


        }
        currentNode.next = node;
        
    }
};

var s = new SingleLInked("SDS")
s.add("DDDD")
s.add("AAAAA")
s.add("CCC")
s.add("GG")

console.log(s)


        // // empty list
        // console.log(currentNode)
        // if(!currentNode){
        //     this.head = node;
        //     this._length++;
        //     return node;
        // }

        // //a non-empty list
        // while(currentNode.next){
        //     currentNode =currentNode.next;
        // }
        // currentNode.next = node;
        // this._length++;
        // console.log("NODDD", node)
        // return node;