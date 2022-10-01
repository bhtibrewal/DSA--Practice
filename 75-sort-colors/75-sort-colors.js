/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    for (let i in nums) {
        if (nums[mid] == 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        }
        else if (nums[mid] == 1) {
            mid++;
        }
        else {
            swap(nums, mid, high);
            high--;
        }
    }
};
function swap(nums, a, b) {
    let c = nums[a];
    nums[a] = nums[b];
    nums[b] = c;
}