# ALGORITHM AND DATA STRUCTURE

BIG(O)
- O(1) - CONSTANT - Swap 2 nus.hashing, memoization

- O(n) - LINEAR - grows direct proportional to size of data.

- O(log N) - LOGARITHMIC - peaks at beginning and slowly flattens as size of datat increase. - binary search, divide and conquer

- O(n log n) - LINEARITHMIC, LOGLINEAR Fastest possible comparison sort; heapsort and merge sort.

- O(n2) - QUADRATIC - Input is n, then runtime is n2
  selection sort - looks for loop inside a for loop - nested loops

- O(2n) - EXPONENTIAL - growth doubles with each additon to the input data set..growth curve of an O(2N) function is exponential 
- starting off very shallow, then rising meteorically. recursive fibbonacci numbers.  Multiplying two n-digit numbers by a simple algorithm; simple sorting algorithms, such as bubble sort, selection sort and insertion sort; (worst case) bound on some usually faster sorting algorithms such as quicksort, Shellsort, and tree sort.

- O(n!) - FACTORIAL - Solving the travelling salesman problem via brute-force search.

Amortization - mortgage - payment remains constant.. 
  overtime values changes
---------------------------------------------
::JAVASCRIPT BIG(O)::
- PUSH /POP - O(1)
- Shift, Unshift, Concat, Slice, Splice - O(n)
- sort - O( n log N) - Merge Sort
- forEach(), map, filter, reduce - O(n)
---------------------------------------------
::Examples::
- Object.assign - O(n) -  looping an array once and assigning the value to the object,
- Insert an array middle of an array - O(n) - 
- remove duplicates fro array - linera or lag or quadratic
- Uppercase a string - O(n)
- Inset an item in a linked list -  O(n)
- Compute the checksum of strings in an array - O(n)
- Sort an array - Exponential
---------------------------------------------
SORT

BEST- O(n)  |  WORST - O(n^2)	O(n^2)
SORT
Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome and Merge sort by Mozilla Firefox and Safari.

 - Quick - divide and conquer

// sorting smaller to bigger, alphabetically, based on year...
Bubble -> compare first to second item. and 2nd to 3rd

Bubble, selection insertion - elementry and less efficient
//Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

Selection sort 

---------------------------------------------
//slice() - returns extracted part of string -  a.slice(1)
//substring() - only positive vals
//validAnagrams
// omline offline

//Filter - select certain items of an array where condition is true
//map -converts each item of an array, returns a value
//REDUCE- single value - The reduce() method is used to apply a function to each element in the array to reduce the array to a single value. arr.reduce(callback, initValue);
// SORT LOG O // Filter - new array// map - new array// Sort - add to existing array// Fill - add to existing array

ARRAYS:
t = [1, 6, 16, 8, 9, 9, 7]
sort() =  //[ 1, 16, 6, 7, 8, 9, 9 ]
//SOME - The some() method tests whether at least one element in the array passes the test implemented by the provided function.
---------------------------------------------

SPLICE VS SLICE
//1. splice() method returns the removed item(s) in an array and 
//2. slice() method returns the selected element(s) in an array, as a new array object.
-- The splice() method changes the original array and slice() method doesn’t change the original array.
--splice(index, howmany, itemtoadd);
---------------------------------------------
LINEAR SEARCH - unsorted data
- Search by going one by one through element
//indexOf() includes()  find  find
BEST -> O(1) - Constant Best Case
WORST -> O(n) -looking through million integers. will have to look million times
AVG -> O(n) - middle is also avg times
---------------------------------------------
BINARY SEARCH - sorted data
Eliminates half data, divide and conquer.
Length of array grows, how does time complexity grows
BEST CASE - O(1)
WORST AVERAGE - O(log n)
---------------------------------------------
- Linear data structures
    SINGLE LINKED LIST - consists of node. each node has a value.  references next item. head, tail and length property. each node is connected one directional to next node.
    LL consist of node has a value and a pointer to another node or null
    - Space - worst - O(n)
    - [DATA, NEXT]
    ---------------------------------------------
      DOUBLY LINKED LIST - data, prev and next
      - Space - worst - O(n)
      Access	Search	Insertion	Deletion
      O(n)	 O(n)	    O(1)	     O(1)
      - Linked data consists of sequentally linked records called nodes.
      - Node - (prev, next)
    ---------------------------------------------

CIRCULAR LINKED LIST

---------------------------------------------
LISTS VS ARRAY:
Lists -> do not have indexes, connected via nodes with a next pointer, random access is not allowed, insertion and deletion are faster
Arrays -> indexes in order, insertion and deletion can be expensive, can quickly be access at specific index
---------------------------------------------


NAIVE SEARCH
// Substring
---------------------------------------------

Linear DS - Arrays, Stack, Queue, Linked List
    Data items are organized sequentially or linearly, one after another.
    Traverse one after another and all data items can traverse in single run.
    Easy to implement because memory of computer is also organized in linear fashion.
Non linear DS - Trees and Graph
    nodes have number of child nodes.
    binary trees - every node has 2 child
    unique node called root in tree
---------------------------------------------
TREE 
    - represent nodes connected by edges
    - each node can have only 2 children.
    - benefit of both ordered array and linked list as search is as quick as sorted array
    - insertion or deletion are as fast as linked list
    Root - Main
    Child - last node, no child
    Parent - of child
    Siblings - 
    Leaf - last node
    Edge
    keys - values on which a node is created

    A binary search tree is a data structure that makes searching and organizing data very straightforward.
    BS - node's left child musht have a value less than its parent's value
    - left node value is less than right side node.
    https://medium.freecodecamp.org/data-structures-101-binary-search-tree-398267b6bff0

---------------------------------------------
GRAPH vs tree
- abstract connection of points, describe state transitions, can be directed and weghted, collection of vertices/nodes
TREES - no cycle, filesystem, collection of nodes and edges

---------------------------------------------
GRAPH
Undirected graph -> facebook, social network - 
Directed -> interlinked web page... index -> page -> link to article
            web crawler

SPECIFIC USES: GRAPH
  1. Binary Search trees - left child- right child and a value
  traversing is faster
  2. Object graphs - Component of a program

  BREATH FIRST - QUEUE - FIFO - No Backtracking
    every sibbling to be checked, 
    find shortest way bettween 2 nodes

DEPTH FIRRST - STACK - FIFO - Backtracking
---------------------------------------------

---------------------------------------------

BIG O OF BST
Insertion - O(log n)
Searchin - O(log n)

---------------------------------------------
STACK - Last In, First Out (LIFO) - Stack of books
push and pop, peek, length
stack organizes data into sequential order.
// Stacks are used for
    - Managing function
    - Undo/Redo - step by step remove from stack
    - Routing (the history object) is treated like a stack
    
push(data) adds data.
pop() removes the most recently added data.
    BIG O STACK ---------->
    Insertion - O(1)
    Removal  - O(1) 
    Searching - O(N)
    Access - O(N)

  BIG O QUEUES ---------->
    Insertion - O(1)
    Removal  - O(1)
    Searching - O(N)
    Access - O(N)

QUEUES - First In, First Out (FIFO). line of people

---------------------------------------------


a = [1, 6, 17, 8, 9, 9, 3, -1]
s = "Janki Dee"
a.sort() //[ -1, 1, 17, 3, 6, 8, 9, 9 ]

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
// array []

var person = {}
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
// Object
---------------------------------------------
ARRAY - BIGO Complexity
Access - O(1)
Appending - Amortized O(1) (sometimes resizing the hashtable is required; usually only insertion is required)
Prepending - O(n) via unshift, since it requires reassigning all the indexes
Insertion - Amortized O(1) if the value does not exist. O(n) if you want to shift existing values (Eg, using splice).
Deletion - Amortized O(1) to remove a value, O(n) if you want to reassign indices via splice.
Swapping - O(1)
---------------------------------------------

Array.isArray(a) ///recognise an array  >> true
a.toString()     //Array to string  >>-1,1,17,3,6,8,9,9
a.join('*')      //Array to string with seperator >> -1*1*17*3*6*8*9*9
a.pop()          //removes last element of an array  >> -1 //doesnt affect any inddices
a.push(-1)       // add last element in the array >> -1 /doesnt affect any inddices
a.shift()        // removes first element and shifts all element to lower index //[ 6, 17, 8, 9, 9, 3, -1 ]
a.unshift('tat')  // add new elem beginning //[ 'tat', 6, 17, 8, 9, 9, 3, -1 ]
a.splice(1, "howMany", "withwhat")        //remove element(where, howMany, withwhat ) 
a.splice(2, 3)                          //remove element() [ 1, 6, 9, 3, -1 ]
a.slice(7)
a.sort()
a.sort( function(a, b){ /*console.log(a, b);*/ return a-b}) //Asscending SOrt
a.sort( function(a, b){ /*console.log(a, b);*/ return b-a}) //DEsc SOrt
let p = a.reduceRight((val, i) => {
    return val+i ;
})
//parseInt - parses a string and returns an integer.
//parseFloat() function parses a string and returns a floating point number.

a = [1, 6, 17, 8, 9, 9, 3, -1]

console.log(a)
var p =a.every( (val, i)=> {
    return val>6
 })

console.log("AS", p)


// num.forEach((val, index) =>{
//     BEST CODE ---- index % 3
//     console.log("IN", val, index % 3)
//     newTest.push(val)
//     //console.log(num.splice(index, 4))
//     if (index % 3 === offset && index < num.length-2) {
//       newTest.push(",")
//       console.log('add coma');    
//     }
//   })

CLOSURE::
//In JavaScript, every running function, code block, and the script as a whole have an associated object known as the Lexical Environment.
<!-- /In JavaScript, whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called.) -->
What is a closure?
A closure is a feature in JavaScript whe re an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

it has access to its own scope — variables defined between its curly brackets
it has access to the outer function’s variables
it has access to the global variables
To the uninitiated, this definition might seem like j

---------------------------------------------
Dynamic programming: Method of solving complex problem by breaking it down into a collection of simpler subproblem, solving and string their solutions.

- Overlapping subproblems :
  problem has to overlap and so reusable
  eg:: fibanacci seq - last 2 digit is equal to next number

- Optimal substructure - problem can be constructed from optimal solutions of its subproblem

