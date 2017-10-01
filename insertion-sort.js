/**
 * Time complexity: O(N^2)
 */
function insertionSort(array, cmp) {
    if (cmp === void 0) { cmp = function (a, b) { return a - b; }; }
    var current;
    var j;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && cmp(array[j], current) > 0) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    console.log(array);
    return array;
}
var ar = [4, 1, 2, 3];
insertionSort(ar);
