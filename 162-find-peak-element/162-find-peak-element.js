/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0, end = nums.length - 1; let mid = Math.floor((end + start)/ 2);
    while (start < end){

        mid = Math.floor((end + start)/ 2);
        
        
        if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) break;
        
        if (nums[mid] > nums[mid+1]) end = mid;
        else start = mid +1 ;
        mid = Math.floor((end + start)/ 2);
        console.log(mid, start, end)
    }
    return mid
};