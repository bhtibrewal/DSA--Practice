/**
 * @param {number[]} nums
 * @return {number}
 */
// [4,5,6,7,0,1,2] mid = 7 -> 7>0
var findMin = function(nums) {
    let start = 0, end = nums.length -1;
    let mid = Math.floor((start + end)/2);
    
    // Case where rotated n times
    if (nums[start] < nums[end]) return nums[start];
    
    while (start < end){
         
        if (nums[mid] >= nums[0]) start = mid + 1;
        else end = mid;
        
        mid = Math.floor((start + end)/2);
    }

    console.log(start, end, mid)
    return  nums[mid];
};