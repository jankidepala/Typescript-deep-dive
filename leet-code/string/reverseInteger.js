const reverseInteger = (n) => {
    var reverse = 0;

    while (n > 0) {
        reverse = (reverse * 10) + (n%10)

        n = parseInt(n/10)

        //0 *10
        // reverse = (reverse * 10) 
        // // 0 + 6   n%10 = last emelemnt
        // reverse = reverse + (n % 10)


        console.log(reverse);

        //1236/10 = n = 123
       // n = parseInt(n / 10)
    }


}
/**
 * @param {number} x
 * @return {number}
 */
//x = 1267
var reverse = function(x) {
    var reversed = 0;
     let isNegetive;
    isNegetive = x>=0 ? false : true;
   if(isNegetive) x = Math.abs(x) 
    while(x >0){
        reversed = (reversed * 10)+ (x % 10)
        console.log(reversed)
        x = parseInt(x/10)
    }
    console.log(reversed)
        if(reversed >= 2147483647) return 0;

    isNegetive ? reversed = -reversed : reversed;

    return reversed;
};
