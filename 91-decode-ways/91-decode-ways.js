/**
 * @param {string} s
 * @return {number}
 */
const numDecodings =(s)=>{
    if (s.length == 0) return 0;
    const dp = Array(s.length+1).fill(0);
    let n = s.length;
    dp[0]= 1;
    dp[1] = s[0] !== "0" ? 1 : 0;

    for(let i=2; i<=n; i++){
        let first = +s.slice(i-1, i);
        let second = +s.slice(i-2, i);

        if (first <= 9 && first>0) dp[i] += dp[i-1];
        if (second <= 26 && second > 9) dp[i] += dp[i-2];
    }

    return dp[n]
    
}