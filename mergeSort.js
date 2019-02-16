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
    console.log('result', result.concat(right.slice(indexRight).concat(left.slice(indexLeft))))
    return result.concat(right.slice(indexRight).concat(left.slice(indexLeft)));
}

mergeSort([1, 9, 7, 10, -12, 7, 0])