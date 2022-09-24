/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    	let mpp=nums[0]; // mpp: maximum Positive Product
        let mnp=nums[0]; // mnp: Minimum Negative Product
       let omax=nums[0]; // overall maximum Product
        
        
        for(let i=1; i< nums.length; i++){
            let val = nums[i]
            
                let temp1=mnp*val;
                let temp2=mpp*val;
            
              mpp=Math.max(val,Math.max(temp1, temp2));
              mnp=Math.min(val,Math.min(temp1, temp2)); 
            
            
            omax=Math.max(mpp,omax);
        }
    
        return omax;
};