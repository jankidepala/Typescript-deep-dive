
class Node {
    constructor(val) {
        [this.value, this.next] = [val, null]
    }
}
class Stacked {
    constructor() {
        this.data = null;
        this.next = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.data) {
            this.data = newNode
            this.next= newNode

        }
        else{
            var temp = this.data;
            this.data = newNode;
            this.data.next = temp
           
        }
        return  ++this.size
        console.log(newNode)
    }

    pop(){
        console.log(this)
        var temp =  this.data.next
        this.next = null
        console.log('temp--', temp)
        this.size--;
        return temp.value
    }
}

var n = new Stacked();
console.log(n)
n.push('yyyy')

n.push('AA')
n.push('BB')
n.push('JJJ')

n.pop()

console.log("return--", n)

// function Stack() {
//     this._size = 0;
//     this._storage = {};
// }

// Stack.prototype.pop = function () {
//     var size = this._size,
//         deletedData;

//     deletedData = this._storage[size];

//     delete this._storage[size];
//     this.size--;

//     return deletedData;
// };


// Stack.prototype.push = function (data) {
//     var size = ++this._size;
//     this._storage[size] = data;
// };

// var t = new Stack;
// t.push([6, 9, 11, 4, 7])
// t.pop()
// console.log(t)