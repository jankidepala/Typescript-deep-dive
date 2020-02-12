"use strict";
/**
 * Time complexity: O(N^2)
 */

// function insertionSort(array, cmp) {
//     if (cmp === void 0) 
//     { cmp = function (a, b) { return a - b; }; }
//     var current;
//     var j;
//     for (var i = 1; i < array.length; i += 1) {
//         current = array[i];
//         j = i - 1;
//         while (j >= 0 && cmp(array[j], current) > 0) {
//             array[j + 1] = array[j];
//             j -= 1;
//         }
//         array[j + 1] = current;
//     }
//     console.log(array);
//     return array;
// }
// var ar = [4, 1, 2, 3, -1238];
// insertionSort(ar);


var items1 = [8, 12, 0, 4, -999]
insertionSort(items1)
function insertionSort(items) {

    var len = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (var i = 1; i < len; i++) {
        console.log(i);
        for (var j = 0; j < i; j++) {
            if (items[i] < items[j]) { //12 0 // 0<12
                var temp = items.splice(i, 1); //2 ->0 (2, 1)
                //j =0, 0, 
                console.log("temp",temp)
              //  items.splice(j, 0, temp[0]) // 1-

                console.log(items)
                // console.log("j", j)
                // console.log("item", items)
            }
        }
    }
    return items;
}
    //     for (i=0; i < len; i++) {

    //     // store the current value because it may shift later
    //     value = items[i];

    //     /*
    //      * Whenever the value in the sorted section is greater than the value
    //      * in the unsorted section, shift all items in the sorted section over
    //      * by one. This creates space in which to insert the value.
    //      */
    //    console.log("I",i)
    //     for (  j=i-1; j > -1 
    //         && items[j] > value; 
    //             j--) {
    //                 console.log(j, items)
    //         items[j+1] = items[j];
    //     }

    //     items[j+1] = value;
    // }
//     console.log(items)
//     return items;
// }