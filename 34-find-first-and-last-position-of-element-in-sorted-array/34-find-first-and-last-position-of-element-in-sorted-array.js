/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length - 1; let res = [-1, -1]
    
    
    while(start < end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid]>= target){
            end = mid
        }
        else {
            start = mid + 1;
        }

    }
    console.log("l", start, end)
    if(nums[start]!==target) return res;
    res[0] = start
    
    //
     end = nums.length - 1;

    while(start < end){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid]<= target ){
            start = mid + 1;
        }
        else {
            end = mid;
        }

    }

    res[1] = nums[start] == target ? start : start - 1
    
    console.log("-----------------")
    return res
};