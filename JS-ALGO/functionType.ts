function add(a:number, b:number):number {
   //sum
    var i;   
    var sum:number = 0; 
    var nums:any[] = [1, 3];
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("FunctionTypes:: sum of the numbers",sum) 
    
    //array
    var someArray = [9, 2, 5];
    for (var item of someArray) {
        console.log(item);
    }
    for (var _i = 0; _i < someArray.length; _i++) {
        var item = someArray[_i];
        console.log('FunctionTypes:: array'+ item);
    }

    //Default Arguments
    function args(r1:number, r2?:number){
        if(r2) return r1*r2;
        return r1;
    }
    console.log("FunctionTypes:: defalt args ", args(3))
    console.log("FunctionTypes:: Optional args ", args(3, 5))
    
    return a+b;

}
console.log(add(2, 4));