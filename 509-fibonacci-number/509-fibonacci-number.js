/**
 * @param {number} n
 * @return {number}
 */
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