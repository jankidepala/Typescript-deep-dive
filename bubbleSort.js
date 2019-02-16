var array = [6, 2, 3, 7, 5, 4, 1];
function bubbleSort1(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}


const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      let change = false;

      for (let j = 0; j < arr.length - (i + 1); j++) {
        console.log(i, j)
        change = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    //   for (let j = 0; j < arr.length - (i + 1); j++) {
    //     if (arr[j] > arr[j + 1]) {
    //       change = true;
    //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    //     }
    //   }
      //if (!change) break;
    }
    return arr;
  };
array.sort

console.log(bubbleSort(array));
let t = 6757
console.log(typeof Number(t.toLocaleString('ar-EG')))