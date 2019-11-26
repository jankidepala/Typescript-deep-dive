var search = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
      start++;

      mid = start + (end-start)/2
      if( nums[mid] === target){
        
      } else if ( nums[mid] < target){

    }else{

    }
    console.log( nums[start] )
    return [-1, -1];
}
};

var search11 = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = left + (right - left) / 2;

        console.log('mid', mid)
        console.log('aa', nums[mid])

        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            return nums[mid]
        } else if (nums[left] <= nums[mid] && nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(nums[left])

    return nums[left]
};
var n = [4,5,6,7,0, 1];
search(n)