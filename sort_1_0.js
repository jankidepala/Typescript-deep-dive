/**
 * Write a program to sort an array containing only 1's and 0’s , 
 * by only iterating it once , and not using extra memory
 */
var log = console.log.bind(console);

const sorter = (input) => {
     input.filter( (val, i) =>{
        if (val ==0){
            input.splice(i, 1)
            input.unshift(0)
        }
    })
    return input
}

log(sorter([1, 1, 1, 0, 1, 0, 1, 0]));