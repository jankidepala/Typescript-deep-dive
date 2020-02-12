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