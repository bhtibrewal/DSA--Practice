/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // sum < 0 => sum = 0
    // sum > 0 => arr.push(el)
    // sum > max => max = sum ,
    let sum = 0, max = nums[0], arr=[]
    for (let num of nums){
        sum += num;
        if(sum  > 0) {
            arr.push(num);
            max = Math.max(sum, max);
        }
        else  {sum = 0; arr = []}
    }
    while(sum< max){
            sum = sum - arr.pop()
    }
    console.log(arr, sum, max)
    return max
};