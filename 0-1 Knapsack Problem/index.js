
/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/

// APPROACH-1 Recursive -> TLE
function solve(W, wt, val, index){
    if(index==0 ){
    if( wt[0]<= W) return val[0];
    else return 0;
    }
    let include=0;
    if (wt[index]<= W) include = val[index] + solve(W-wt[index], wt, val, index-1)
    
    let exclude = 0+ solve(W, wt, val, index-1)
    
    
    return Math.max(include, exclude)
}


function Solution (){
    //Function to return max value that can be put in knapsack of capacity W.
    this.knapSack=(W, wt, val, n)=>{ 
      return solve(W, wt, val, n-1)
    }
}

// APPROACH-2 Recursive + DP
function solve(W, wt, val, index, dp){
    if(index==0 ){
    if( wt[0]<= W) return val[0];
    else return 0;
    }
    if(dp[index][W]!==-1) return dp[index][W];
    let include=0;
    if (wt[index]<= W) include = val[index] + solve(W-wt[index], wt, val, index-1, dp)
    
    let exclude = 0+ solve(W, wt, val, index-1, dp)
    
    dp[index][W] = Math.max(include, exclude)

    
    return dp[index][W]
}


function Solution (){
    //Function to return max value that can be put in knapsack of capacity W.
    this.knapSack=(W, wt, val, n)=>{ 
        let dp = Array(n).fill( new Array(W+1).fill(-1));

      return solve(W, wt, val, n-1, dp)
    }
}

// APPROACH-1 Recursive 