
var arr1 = [3, -6576, 55, 16, 8 , 1];
function mergeSort(arr) {
    if (arr.length < 2) return arr;
    var len = arr.length
    var mid = Math.floor(len / 2), left = arr.slice(0, mid), right = arr.slice(mid)
  //  console.log(left, right, mid)
    return mergeThis(mergeSort(left), mergeSort(right));
}

function mergeThis(left, right) {
    console.log("LLL:",left, right)
    var result = [], l = 0, r = 0, lLen = left.length, rLen = right.length;
    console.log(l ,lLen, "&&" ,r , rLen)
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l])
            l++
        } else {
            result.push(right[r]);
            r++
        }
    }
   console.log("LEFT::", left, l, left.slice(l))
    return result.concat(left.slice(l)).concat(right.slice(r));
}
function merge123(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l])
            l++
        } else {
            result.push(right[r])
            r++
        }

    }
    console.log("result", result, left.slice(l), right.slice(r))
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

var t = mergeSort(arr1)
console.log("Merged>>>>>",t)
