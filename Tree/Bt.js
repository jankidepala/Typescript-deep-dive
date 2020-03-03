class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    dfs_inorder() {
        if (!this.root) return null
        else {
            var result = new Array();
            function traverInOrder(n) {
                result.push(n.value);
                n.left && traverInOrder(n.left);
                n.right && traverInOrder(n.right);
            }
            traverInOrder(this.root)
            return result;

        }
    }

    bfs_levelOrder() {
        let result = [];
        let Q = [];
        if (this.root) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.value)
                if (node.left != null) {
                    Q.push(node.left)
                }
                if (node.right != null) {
                    Q.push(node.right)
                }
            }
            return result;
        } else { return null }
    }
    
    addNode(n) {
        var root = this.root;
        var currentNode = root;
        var newNode = new Node(n);

        if (!this.root) {
            this.root = new Node(6);
            return;
        }

        while (currentNode) {
            if (n < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                else {
                    currentNode = currentNode.left;

                }
            } else {
                console.log('ppp')
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                else {
                    currentNode = currentNode.right;
                }
            }

        }
        console.log(n)
    }
}

var l = new BST();
l.addNode(4);
l.addNode(1);
l.addNode(8);
l.addNode(2);

//l.dfs_inorder();
console.log('----', l)
console.log('----', l.bfs_levelOrder())


