// Binary Search is searching technique which works on 
//Divide and Conquer approach (Half-Interval Search).
// It used to search any element in a sorted array.
//avg Time Complexity of O(logN) which is very efficient as dataset grows
// hierarchical org chart, DOM, animal classification 
//search, game logic, autocomplete tasks, and graphics.

//unlike array, data is storedby ref. as we add it to DS, we create a ne chunk in memory..

// no duplicates
// object prototype method - to save memory
// iterative and recursive
/**
BinarySearchTree {
  root: Node {
    left: Node { left: [Node], right: null, value: 20 },
    right: Node { left: null, right: null, value: 100 },
    value: 25
  }
}
 */
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  getMin(node) {
    let queue = [];
    queue.push(this.root);
    console.log("QQQQQQQQ-------", queue)
    var node1 = new Node(2)

    if (!node) this.root = node1;
    let current = this.root;
    while (current.left) {
      console.log(current)
      node = current.left;
    }
  }
  containe(value) {
    if (!this.root) this.root = node;

    let current = this.root
    console.log(current)
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      if (value > current.value) current = current.right;

    }
    return false;
  }
  insert(a) {

    //node
    //1. first node insert
    //2. left or right
    //3. whi

    var node = new Node(a)
    if (!this.root) this.root = node;
    else {
      let current = this.root;
      while (current) {
        if (node.value < this.root.value) {
          //left
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.value > this.root.value) {
          //right
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    console.log("this----", this)
    return this;
  }
}

let bst = new BST();
console.log(bst.insert(26).insert(20).insert(70).insert(80)); // BST { root: Node { value: 25, left: null, right: null } }
console.log("SEARCH", bst.getMin());
