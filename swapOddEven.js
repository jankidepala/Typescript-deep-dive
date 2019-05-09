var swapPairs = function (head) {
    //return head;
    var a = []
    // head.forEach(e => {
    //     if (e % 2 != 0)
    //         a.push(e)
    // })
    // return a


    return head.filter( p =>  p %2==0 )
}

console.log(swapPairs([7, 8, 6, 3, 2, 5]))