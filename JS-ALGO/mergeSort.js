//divide and conquer
//unsorted list

var p = [1, 78, 5, 7, 2, -6, 0, 7, -345476786];
function mergeThis(arr) {
    var len = arr.length;
    if (len < 2) return arr;
    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid), right = arr.slice(mid)
        console.log(left, right)
   return merge123(mergeThis(left),mergeThis(right));
}

function merge123(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
while( l < lLen && r < rLen){
    if( left[l] < right[r]){
        result.push(left[l])
        l++
    }else{
        result.push(right[r])
        r++
    }

}

    // while(l < lLen && r < rLen){
    //    if(left[l] < right[r]){
    //      result.push(left[l++]);
    //    }
    //    else{
    //      result.push(right[r++]);
    //   }
    // }  
    console.log("result",result, left.slice(l), right.slice(r))
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }
        
  console.log("MERGED SORT", mergeThis(p));
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    //console.log(middle, left, right)
    console.log(mergeSort(left))
    return merge(mergeSort(left), mergeSort(right));
    // return merge(left, right)
}

function merge(left, right) {
    console.log(left, right, left.length)
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        console.log('this')
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            console.log('L', result)
            indexLeft++;
        }
        else {
            result.push(right[indexRight])
            console.log('R', result)
            indexRight++;
        }
    }
    //  console.log('RRR', right, left, indexRight, indexLeft)
    //  console.log('result', result.concat(right.slice(indexRight).concat(left.slice(indexLeft))))
    //return result.concat(right.slice(indexRight).concat(left.slice(indexLeft)));
}

//mergeSort([1, 9, 7, 10, -12, 7, 0])