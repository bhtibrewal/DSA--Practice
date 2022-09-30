
/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/



const knapSack = (capacity, wt, val, n) => { 

    // build a dp n+1*W+1
      let dp = Array(n+1).fill(0).map(el=> new Array(capacity+1).fill(0));
          
      for( let i = 0; i <= n; i++){
        for (let w = 0; w <= capacity; w++){

            if(i == 0 || w == 0 ) dp[i][w] = 0;

            else {
                let include = 0;

                if (wt[i -1] <= w) 
                include = val[i -1]+dp[i-1][w - wt[i - 1]]
            
                let exclude = dp[i-1][w];
                
                dp[i][w] = Math.max(include, exclude)
            }
        }
      }
      
      return dp[n][capacity]
}