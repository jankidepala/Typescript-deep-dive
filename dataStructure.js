// // Data structures and algorithm questions
// // Given the following, how would I group the item, so that I can get the result below
// var foodItems = [
//     { type: "chinese", name: "chow mein" },
//     { type: "american", name: "burgers" },
//     { type: "chinese", name: "wontons" },
//     { type: "indian", name: "chicken" },
// ];
// //console.log(foodItems[0].name)
// const t = foodItems.reduce((e, b) => [b.name])
// //console.log(t)
// // Output
// // result = [
// //   { type: "chinese", name: ["chow mein", "wontons"], count: 2 },
// //   { type: "america", name: ["burgers"], count: 1 },
// //   { type: "indian", name: "chicken", count: 1 }
// // ];

// var Person = {
//     name: 'Jon Snow',
//     getName: function () {
//         console.log('TT', this.name)
//         return this.name
//     }
// }
// var P = Person.getName; // 
// console.log(P()); // what is the output of this?

// let b = Object.assign({ foo: 0 }, { tru: 1 }, { foo: 2 }, { 'thyu': 'AS' });
// //console.log(b);

// // Merge an object
// let first = { name: 'Tony' };
// let last = { name: 'Stark' };
// let person = Object.assign(first, last);
// console.log(person);

// let t1 = [1,5, 7]
// let p = ['sds' , ...t1 , 'yyy']

// console.log(p)

var Person = {
    name: 'Jon Snow',
    getName: function () {
        return this.name
    }
}
var P = Person.getName.bind(Person);
P(); // what is the output now?

var input = [7, 3, 1, 4, 5, 6, 3, 2];
function duplic(a) {
    let b = [1, 2, 3];
    let g = a.reduce((old, newVal) => newVal + 2)
    return b
}
var input1 = [7, 2, 1];

const average = input1.reduce((total, amount, index, array) => {
    total += amount
    console.log(total)
    return total
  }, 1);
  console.log(average)