```jsx
// recursion + DP 
const minCostClimbingStairs =(cost)=>{
    let n = cost.length, dp=Array(n+1).fill(-1)
    return Math.min(helper(cost,n-1, dp), helper(cost,n-2, dp))
    
}
const helper = (cost,n, dp)=>{
    if(n==0 || n==1) return cost[n];
    
    if(dp[n]!==-1) return dp[n];
    
    
    dp[n] = Math.min(helper(cost,n-1, dp), helper(cost,n-2, dp)) + cost[n]
    return dp[n]
}
```

```jsx
// Bottom up computation - O(n) time, O(1) space
var minCostClimbingStairs = function(cost) {
  let n = cost.length, i = 2
  if(n <= 2) return Math.min(cost[0] , cost[1])
  while (i< n){
    let temp = Math.min(cost[0] , cost[1]) + cost[i++];
    ​
    cost[0] = cost[1];
    cost[1] = temp
  }
  return Math.min(cost[0] , cost[1])
};
```
