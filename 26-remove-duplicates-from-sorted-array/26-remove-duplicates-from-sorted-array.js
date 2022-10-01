/**
 * @param {number[]} nums
 * @return {number}
 */

// Tricky one 
var removeDuplicates = function (nums) {
    let k = 0, curr = 0;
    for (let i in nums) {
        // console.log(nums)
        if (nums[curr] !== nums[i]) {
            curr++;
            nums[curr] = nums[i]
        }
    }
    return curr + 1
};