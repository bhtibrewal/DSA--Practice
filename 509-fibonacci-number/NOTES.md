```jsx
// recursion + dp
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
```

```jsx
// optimised code
var fib = function(n) {

    if(n == 0) return 0;
	  const dp = [0, 1];
    let i=2;
    while(i++<=n){
        let temp= dp[0]+dp[1]
        dp[0] = dp[1];
        dp[1]=temp
    }
    return dp[1]
};
```​