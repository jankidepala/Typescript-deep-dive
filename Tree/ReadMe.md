Trees and Graphs: 
Study up on trees: tree construction, traversal, and manipulation algorithms. You should be familiar with binary trees, n-ary trees, and trie-trees at the very least. 

You should be familiar with at least one flavor of balanced binary tree, whether it's a red/black tree, a splay tree or an AVL tree, and you should know how it's implemented. 

More generally, there are three basic ways to represent a graph in memory (objects and pointers, matrix, and adjacency list), and you should familiarize yourself with each representation and its pros and cons. 

Tree traversal algorithms: BFS and DFS, and know the difference between inorder, postorder and preorder traversal (for trees). You should know their computational complexity, their tradeoffs, and how to implement them in real code. 

If you get a chance, study up on fancier algorithms, such as Dijkstra and A* (for graphs).


----------
4. Given a sorted array convert the same to a Binary Search Tree


Red Black tree:

tim os O(log n) 
- Node is red or black
- root and leaves (NIL) are black
- if node is red, children are black
- All paths from a node to its NIL descendants contain same number of black nodes.
- longest path- alternate red and black
- shortest path - black nodec

SPLAY TRESS
- ALmost balances
- access keys faster
find- walk tot he key
insert - normal BST
remove - same as BST
Zig zag procedure - when x
rotate parent and grand parent


AVL trees: Diff in height should always be less than or more than 1
 
Control depth of a tree so that i

