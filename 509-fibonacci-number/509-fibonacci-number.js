/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
 
   const dp = Array(n+1).fill(-1);
   
    
    return helper(n, dp )
};

const helper = (n, dp)=>{
    if (n<=1) return n
    if (dp[n] !== -1) return dp[n]
    
    dp[n] = helper(n-1, dp) + helper(n-2, dp)

    return dp[n]
}