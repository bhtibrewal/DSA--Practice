```js
// recursive approach didn't work
var numDecodings = function(s) {
if(s.length == 0) return 0;
const dp = Array(s.length+1).fill(-1);
return helper(s, dp);
};
​
const helper = (s, dp)=>{
let n = s.toString().length;
​
dp[0] = 1;
dp[1] = +s[0] !== 0 ? 1 : 0;
console.log(s, dp, n, );
if(dp[n] !== -1) return dp[n] ;
let first = +s.toString().slice(0, n-2);
let second = +s.toString().slice(0, n-1);
​
let single = 0, double = 0;
if (first <= 9 && first >0)
single = helper(first, dp);
if(second <= 26 && second > 0) double =  helper(second, dp);
console.log(first,  second, single, double )
dp[n] = single + double
return dp[n]
}
```