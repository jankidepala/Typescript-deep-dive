function charCount(repe) {
    let c = repe.split('').map((val, index) => {
        let a = { val: val };
        console.log(a); return a
    }
    )
    return c
}

charCount('Janki')

t = [1, 6, 6, 8, 9, 9, 7]

const b = t.forEach((element, i) => {
    element == t[i + 1] ? t[i + 1] = element + 1 : null
    //  console.log(t)
    return t
});
//console.log(b)

arr = [1, 7, 7, 2]
// arr.forEach((num, i) => {
//     console.log( num  == arr[i + 1])
//     if( num  == arr[i + 1]){
//         arr[i + 1] = num+1;
//         console.log("IF",arr)
//         return arr
//     }
//     else {
//         return arr
//     }
//    // return num == arr[i + 1] ? arr[i + 1] = num + 1 : arr
// });
var square = function(n) { 
    return n * n; 
  }
  console.log(square(5));



var all = []
arr.reduce((all, item, index) => {
    console.log(index, 'kkk', arr.indexOf(arr[index]));
    if (arr.indexOf(arr[index]) === index) {
        all.push(item)
    }
    console.log('lll - ',all)
    return all
}, [])

arr.map((num, i) => {
    // return num == arr[i + 1] ? arr[i + 1] = num + 1 : arr
})


//console.log(arr)

let arr = 10037899
let num = arr.toString().split('');
var newTest =[]
var offset = (num.length - 1) % 3;
num.forEach((val, index) =>{
  // index % 3 remainder
  console.log("IN", val, index % 3)
  newTest.push(val)
  //console.log(num.splice(index, 4))
  if (index % 3 === offset && index < num.length-2) {
    newTest.push(",")
    console.log('add coma');    
  }
})

/*
Always open to improvement ,please share
*/