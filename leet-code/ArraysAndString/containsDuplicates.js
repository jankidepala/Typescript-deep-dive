var containsDuplicate = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        console.log ( '-----', nums[i], i )
        obj[nums[i]] = obj[nums[i]] + 1 || 1 ;
        console.log(obj)
        if(obj[nums[i]] > 1) return true;
    }
    
   // return false;
};


console.log( containsDuplicate( [1,4,7,9, 4] ) );