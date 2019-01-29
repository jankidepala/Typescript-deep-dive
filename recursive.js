
function recursive(a) {
  console.log(a)
  if (a == 20) return;
  return a * recursive(a + 1)
}

function factorialab(b) {
  if (b == 1) return;
  console.log(b)
  return factorial(b - 1) * b
}
var f = [];
function factorial(n) {
  if (n == 0 || n == 1)
    return 1;
  //   if (f[n] > 0)
  //     return f[n];
  return f[n] = factorial(n - 1) * n;
}

//console.log(factorialab(3))
//console.log(factorialab(3))

var m = [3, 7, 8, 0, 1]
console.log(...m.splice(-4, 3))

function reverse(t) {
  console.log(t.split('').reverse().join(''))
}



/////////

var mn = ['car','taco','banana', 'jhui'];
let k = capitalizeFirst(mn)
console.log(k)
function capitalizeFirst (arr) {
  if(!arr.length) return []
  console.log(arr)
  return [ arr[0].charAt(0).toUpperCase() + arr[0].slice(1), ...capitalizeFirst(arr.slice(1))]
}
//reverse1 SOLUTION - 
reverse1('TRIANGLE')
function reverse1(str){
  if (str.length <=1) return str;
  //return reverse1( (str.slice(1)) + str[0] )
}

function isPalin(t) {
  return t.split('').reverse().join('') === t ? true : false
}


function a(val) {
  return val % 5
}
console.log(a(23))

const isOdd = val => val % 2 !== 0;
var m = someRecursive([4,6,8,9], 0)

function someRecursive(arr, val) {
  var t = arr.filter( (v, index) => {
    return isOdd(v);
  })
  return t.length >0 ? true : false
}