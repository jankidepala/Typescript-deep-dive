var log = console.log.bind(console);


//reduce()
var maxProfit = function (prices) {
    return prices.reduce((res, v, i, arr) => {

        log(res, v, '>',   arr[i - 1] , i)
        return v > arr[i - 1] ? res + v - arr[i - 1] : res;
    }, 0)
}

log(maxProfit([9, 5, 1, 2, 3]))