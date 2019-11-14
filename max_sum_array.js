var log = console.log.bind(console);

const maxSum = (arr) => {
    // SUM OF ALL NUM
    // return arr.reduce( (prev, curr, i) =>{
    //     return prev+curr
    // })

    // FIND sum of 2 numbers
    // arr.sort();
    // log(arr.length)
    // return arr[arr.length - 1] + arr[arr.length - 2];
}

function maxNoAdjacent(source) {
    let inclCurrent = source[0];
    let exclPrev = 0;
    let temp_max;
    for (let i = 1; i < source.length; i++) {
        temp_max = Math.max(inclCurrent, exclPrev);
        inclCurrent = exclPrev + source[i];
        exclPrev = temp_max;
    }
    return Math.max(inclCurrent, exclPrev);
}

log(maxNoAdjacent([5, 1, 2, 4]))

