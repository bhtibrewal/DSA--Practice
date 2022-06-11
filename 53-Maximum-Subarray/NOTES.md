## kadane's Algorithm O(n)

![](https://assets.leetcode.com/users/images/2715e7ab-8fad-4f5f-ace9-cfe83acba68f_1637809592.7767313.jpeg)
```
	var maxSubArray = function(nums) {
			let sum = 0;
			let max=nums[0];
			for(let i of nums){
					sum += i;
					if (max < sum) 
							max = sum;
					if(sum < 0)
							sum=0;
			}
			return max;
	};
```