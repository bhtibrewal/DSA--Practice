/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let m  = triangle.length, n = triangle.at(-1).length;

    let dp = triangle.at(-1)
    for (let i = n-2; i >=0 ; i--){
        for (let j=0; j < triangle[i].length; j++){
           dp[j] =  triangle[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }
    console.log(dp)
    return dp[0]
};