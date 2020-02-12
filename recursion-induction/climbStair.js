/**
 * @param {number} n
 * @return {number}
 */
var store= {};
var climbStairs = function(n) {
    console.log( 'n=',n, 'store=',store)
   
   if(n <=1 )  return 1;

   if( !store[n-1]){

    store[n-1] = climbStairs(n-1)
   }
   console.log( '-----', n, store)

   if( !store[n-2]){
       store[n-2] = climbStairs(n-2)
   }
    console.log('final', n, store[n])
   return store[n-1] + store[n-2]


};


console.log( climbStairs(6))