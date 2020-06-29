const quickSort =
    (arr) => {
        if(arr.length === 1) return arr;
        console.log(arr.length)
        const pivot = arr[arr.length - 1];
        var left = []
        var right = []

        for (const el of arr.slice(0, arr.length - 1)) {
            console.log(el, pivot)
            el < pivot ? left.push(el) : right.push(el)
        }

console.log('left', left)
console.log('right', right)

        if (left.length > 0 && right.length > 0) {
            return [quickSort(left), pivot, quickSort(right)]
        } else if (left.length > 0) {
            return [quickSort(left)]
        } else {
           // return [pivot, quickSort(right)]
        }
    }

var a = [2, 6, 7, 91, 2, 22, 8, 3, 5]
console.log('qqqq', quickSort(a));
var st = 'asdf'
var st1 = 'ddfa'
console.log(st.localeCompare(st1));