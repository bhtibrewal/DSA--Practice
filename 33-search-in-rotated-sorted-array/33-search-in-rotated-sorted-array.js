/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length -1;
    let pivot = getPivot(nums, start, end);
    
    if (nums[end] >= target){
        console.log({pivot, })
        return binarySearch(nums, target,  pivot, end)
    }
    
    return binarySearch(nums, target,  start, pivot - 1)
    
};
const binarySearch = (arr, key, start, end) => {
    console.log( key, start, end)
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        
        if (arr[mid] == key) {
            return mid;
        }
        if(arr[mid] > key){
            end = mid - 1;    
        }
        else {
            start = mid + 1;
        }
        
        mid = Math.floor((start + end) / 2);
        
    }
    return - 1;
}

const getPivot =(nums, start, end)=>{
    let mid = Math.floor((start + end)/2);
    
    // Case where rotated n times
    if (nums[start] < nums[end]) return start;
    
    while (start < end){
         
        if (nums[mid] >= nums[0]) start = mid + 1;
        else end = mid;
        
        mid = Math.floor((start + end)/2);
    }
    return mid;
}