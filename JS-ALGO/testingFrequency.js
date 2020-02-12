
const sameFrequency = (num1, num2) => {
    console.log(num1.toString().split('').sort().join(''))
    return num1.toString().split('').sort().join('') === num2.toString().split('').sort().join('') ? true: false
}
 
var m = sameFrequency(3621, 263);
console.log(m)