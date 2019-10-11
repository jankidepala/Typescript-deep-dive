class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class BinarySearchTree {
    constructor(node = null) {
        this.root = node;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        console.log('Val-->>', value)
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

console.log(tree)

console.log(13 % 10)
console.log(10 % 13)

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        console.log("YYY", y)
      var t = y;
      y = x % y;
      x = t;
    }
    console.log('x',x)
    return x;
  }

  gcd_two_numbers(6, 10)
  gcd_two_numbers(10, 13)
  gcd_two_numbers(13, 10)

  var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
console.log(keysSorted);     // bar,me,you,foo