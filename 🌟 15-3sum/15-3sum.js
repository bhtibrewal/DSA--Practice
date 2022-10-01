/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const map={}, result = [];
    nums.sort((a, b) => a-b )

    for (let i in nums) map[nums[i]] = i;
    
    for(let j=0;j<nums.length-2;j++){
        
        for(let i = j+1; i<nums.length-1; i++){

            const another = - nums[j] - nums[i];

            if (another in map && map[another]>i) {
                result.push([nums[j], another, nums[i]]);
            }
            
          i= map[nums[i]]
        }
        j = map[nums[j]]
    }
    return result;
};