/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let mod = 10 ** 9 + 7;
    let mul = 2;
    
    let ans = 1;
    for(let i = 2; i <= n; i++){
        if(i === mul) mul *= 2;
        ans = (ans * mul + i) % mod;
    }
    
    return ans;
};
