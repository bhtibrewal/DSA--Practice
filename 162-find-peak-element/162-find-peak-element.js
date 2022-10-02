/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) -> time complexity 
// find peak by linearly interating over the arr
/**
const findPeakElement = (nums)=>{
    for(let i=0; i<nums.length; i++){
        console.log(nums[i])
        if(nums[i] > nums[i+1]) return i
    }
    return nums.length - 1
}
**/

// O(log n) -> time complexity 
// iterative binary search
var findPeakElement = function(nums) {
    let start = 0, end = nums.length - 1; 
    let mid = Math.floor((end + start)/ 2);
    
    while (start < end){

        // condition for peak value
        if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) break;
        
        if (nums[mid] > nums[mid+1]) end = mid; // right side of peak
        else start = mid +1 ;// left side of peak
        
        mid = Math.floor((end + start)/ 2);
    }
    return mid
};

