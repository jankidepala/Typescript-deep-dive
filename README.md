# ALGORITHM AND DATA STRUCTURE

//slice() - returns extracted part of string -  a.slice(1)
//substring() - only positive vals
//validAnagrams

//Filter - select certain items of an array where condition is true
//map -converts each item of an array, returns a value
//REDUCE- single value - The reduce() method is used to apply a function to each element in the array to reduce the array to a single value. arr.reduce(callback, initValue);

ARRAYS:
t = [1, 6, 16, 8, 9, 9, 7]

sort() =  //[ 1, 16, 6, 7, 8, 9, 9 ]

---------------------------------------------
LINEAR SEARCH - unsorted data
- Search by going one by one through element
//indexOf() includes()  find  find
BEST -> O(1) - Constant Best Case
WORST -> O(n) -looking through million integers. will have to look million times
AVG -> O(n) - middle is also avg times
---------------------------------------------
BINARY SEARCH - sorted data
// eliminates half data, divide and conquer
// length of array grows, how does time complexity grows
BEST CASE - O(1)
WORST AVERAGE - O(log n)
---------------------------------------------
NAIVE SEARCH
// Substring

---------------------------------------------
SORT
// sorting smaller to bigger, alphabetically, based on year...

Bubble, selection insertion - elementry and less efficient
BUilt in JS Sort
=> arr.sort()


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

Array.isArray(a) ///recognise an array  >> true
a.toString()     //Array to string  >>-1,1,17,3,6,8,9,9
a.join('*')      //Array to string with seperator >> -1*1*17*3*6*8*9*9
a.pop()          //removes last element of an array  >> -1
a.push(-1)       // add last element in the array >> -1
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

