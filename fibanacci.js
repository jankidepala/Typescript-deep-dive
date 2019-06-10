function fib(n) {
    console.log("N", n);
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}
//O(2N)

//console.log(fib(30))

function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a; // 
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

//memoization = store data in object or in array

function fibi(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n < 2) return 1;
    var res = fibi(n - 1, memo) + fibi(n - 2, memo)
    memo[n] = res;
    return res;
}
//console.log(fibi(7780))


  //APPROACH::top down or bottom up 
  //Memoziation
  //Tabulation - Storing the result of a previous result in a table(ARRAY)
  //loop and move fwd

function fibTabulation(n){
    if(n<=2) return 1;
    var fibNums = [0,1,1];
    for(var i =3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]; 
    }
    return fibNums[n];
}

console.log(fibTabulation(700))