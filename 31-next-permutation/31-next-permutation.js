/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [1, 2, 4, 3] -> [1, 3, 2, 4] -> [1, 3, 4, 2]
var nextPermutation = function(nums) {
    let breakPoint;
    
    for (let i = nums.length; i>=0; i--){
        if (nums[i] < nums[i+1]){
            breakPoint= i;
            break;
        }
    } // nums[breakPoint] = 2

    for (let i = nums.length; i>=0; i--){
        if (nums[i] > nums[breakPoint]){
            [nums[i], nums[breakPoint]] = [nums[breakPoint], nums[i]];
            break;
        }
    } // find first num > nums[breakPoint] = 2 =>  nums = [1, 3, 4, 2]
    
    const arr = nums.splice(breakPoint+1).reverse(); // [4, 2] => [2, 4]
    // nums = [1, 3]
    nums.push(...arr) // nums = [1, 3, 2, 4]
};