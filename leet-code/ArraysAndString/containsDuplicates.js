var containsDuplicate1 = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        console.log ( '-----', nums[i], i )
        obj[nums[i]] = obj[nums[i]] + 1 || 1 ;
        console.log(obj)
        if(obj[nums[i]] > 1) return true;
    }
    
   // return false;
};

var containsDuplicate = function(nums) {
    var hash = {};

    for(s of nums){
        if( hash[s]){
            hash[s]++
        } else{
            hash[s] = 1;
        }
    }
    console.log(hash)
    console.log(Object.values(hash))
    return Object.values(hash)>1 ?  true :  false
};

console.log( containsDuplicate( [1,4,7,9, 4] ) );