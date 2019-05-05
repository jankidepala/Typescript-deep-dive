# ALGORITHM AND DATA STRUCTURE

//slice() - returns extracted part of string -  a.slice(1)
//substring() - only positive vals
//validAnagrams
// omline offline
//Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
BEST- O(n)  |  WORST - O(n^2)	O(n^2)

Selection sort 

//Filter - select certain items of an array where condition is true
//map -converts each item of an array, returns a value
//REDUCE- single value - The reduce() method is used to apply a function to each element in the array to reduce the array to a single value. arr.reduce(callback, initValue);

ARRAYS:
t = [1, 6, 16, 8, 9, 9, 7]

sort() =  //[ 1, 16, 6, 7, 8, 9, 9 ]
//SOME - The some() method tests whether at least one element in the array passes the test implemented by the provided function.
---------------------------------------------
SPLICE VS SLICE
//1. splice() method returns the removed item(s) in an array and 
//2. slice() method returns the selected element(s) in an array, as a new array object.
-- The splice() method changes the original array and slice() method doesn’t change the original array.
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
SINGLE LINKED LIST - consists of node. each node has a value.  references next item. head, tail and length property. each node is connected one directional to next node.
LL consist of node has a value and a pointer to another node or null
---------------------------------------------
DOUBLY LINKED LIST
---------------------------------------------
LISTS VS ARRAY:
Lists -> do not have indexes, connected via nodes with a next pointer, random access is not allowed, insertion and deletion are faster
Arrays -> indexes in order, insertion and deletion can be expensive, can quickly be access at specific index
---------------------------------------------


NAIVE SEARCH
// Substring

---------------------------------------------
SORT
// sorting smaller to bigger, alphabetically, based on year...
Bubble -> compare first to second item. and 2nd to 3rd

Bubble, selection insertion - elementry and less efficient
BUilt in JS Sort
=> arr.sort()

---------------------------------------------
TREE 
Root
Child 
Parent
Siblings
Leaf 
Edge

A binary search tree is a data structure that makes searching and organizing data very straightforward.

BREATH FIRST - every sibbling to be checked
DEPTH FIRRST
---------------------------------------------
BIG O OF BST
Insertion - O(log n)
Searchin - O(log n)

---------------------------------------------
STACK - Last In, First Out (LIFO)
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

QUEUES - First In, First Out (FIFO). 
---------------------------------------------
TREES :
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
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

it has access to its own scope — variables defined between its curly brackets
it has access to the outer function’s variables
it has access to the global variables
To the uninitiated, this definition might seem like j

