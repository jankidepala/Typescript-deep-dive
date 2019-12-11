/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = Array.from({length:temperatures.length},x=>0);
    let stack = [];
    for(let i=0; i<temperatures.length; i++){
    	while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
            let j = stack.pop();
            console.log( 'jj', j )
    		res[j] = i-j;
    	}
    	stack.push(i);
    }
    console.log( res )
    return res;
};


const tempr = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(tempr)