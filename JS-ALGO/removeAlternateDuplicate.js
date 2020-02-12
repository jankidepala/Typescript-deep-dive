// Remove Alternate Duplicate characters from a char array you have to do it in Place.Like keeping only the odd occurences of each character.


// Example: Input: “you got beautiful eyes”
// Output: ”you gtbeaiful es”
// Allowed Time Complexity was O(n) and Space Complexity was O(1)

var input = 'youuomu'
// Output: ”you gtbeaiful es”

var string = 'you have beautiful eyes',
    visited = new Set,
    result = Array.from(string, c => c === ' ' || !visited.has(c) && visited.add(c) ? c : '')
        .join('');
    
console.log(result);

var myArray = [1, [6, [8890, [99999]]], 7, 8, 1, 3]
//var myNewArray = [].concat.apply([], myArray);

//  console.log([].concat.apply(...myArray)
//console.log(myArray.flat(2))
function removeDuplicateCharacters(string){
    return string
       .split('')
       .filter(function(item, pos, self) {
       return self.indexOf(item) == pos;
       })
       .join('');
     
   }
   console.log(removeDuplicateCharacters('baraban'));

var myNewArray = myArray.reduce(function (prev, curr, i) {
    return myArray.flat(i)
    //return prev.concat(curr);
}, []);

console.log(myNewArray)

var array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(2, 4));
