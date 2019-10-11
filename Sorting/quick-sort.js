const p = [5, 9, 4, 1, 0, 7, -9]

const quickSort = (a) => {
    if (a.length < 2) return;
   // console.log(a);
    let pivot = a[0], lesser = [], greater = [],
        len = a.length;

    a.forEach((element, i) => {
        if (element > pivot) {
            lesser.push(element);
        } else {
            greater.push(element);
        }
    });
   // console.log(quickSort(lesser))
    return quickSort(lesser)
}

function quicksortBasic(array) {
    if (array.length < 2) {
        return array;
    }

    var pivot = array[0];
    var lesser = [];
    var greater = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    } //console.log("LLL", quicksortBasic(lesser)    )

    return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

quickSort(p)
var t = quicksortBasic(p);
console.log(t);