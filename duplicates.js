// DUPLICATES

var arr = [5, 6, 7, 7, 1, 8]

//SET
let t = [...new Set(arr)]
//console.log(t);

//ES6
let t1 = arr.filter((val, index, array) => {
    console.log( index, array.indexOf(val))
    return array.indexOf(val) == index
})

//ForEach
var result = [];
arr.forEach(function(item) {
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
});
// Count the Duplicates
var count = 1
let t2 = arr.filter((val, index, array) => {
    array.indexOf(val) != index ? count+=1 : null
})
console.log(count)

//undefined is a type itself (undefined) while null is an object.
//undefined means a variable has been declared but has not yet been assigned a value. 
// null is an assignment value. It can be assigned to a variable as a representation of no value.

///STRING RETURN
var str = 'Jaaaaaaaakittt';
for (const ch of str){
    
}
