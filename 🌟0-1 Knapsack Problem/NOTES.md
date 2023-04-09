```
wt[] = {1, 1, 1}, W = 2, val[] = {10, 20, 30}

                       K(n, W)
                       K(3, 2)  
                   /            \ 
                 /                \               
            K(2, 2)                  K(2, 1)
          /       \                  /    \ 
        /           \              /        \
       K(1, 2)      K(1, 1)        K(1, 1)     K(1, 0)
       /  \         /   \              /        \
     /      \     /       \          /            \
K(0, 2)  K(0, 1)  K(0, 1)  K(0, 0)  K(0, 1)   K(0, 0)

Recursion tree for Knapsack capacity 2 
units and 3 items of 1 unit weight.
```

## APPROACH-1 Recursive -> TLE
```jsx
function solve(W, wt, val, k){
    // base case
    if(k ==0 ){
        if( wt[0]<= W) return val[0];
        else return 0;
    }

    let include=0;

    // If weight of the Kth item is less than Knapsack 
    // capacity W, then include it and reduce the 
    // knapsack capacity W by its weight wt[k]
    if (wt[k] <= W) 
    include = val[k] + solve(W-wt[k], wt, val, k-1)
    
    // exclude it case 
    let exclude = 0 + solve(W, wt, val, k-1)
    
    // Return the maximum of 2 cases:
    //  kth item included & excluded
    return Math.max(include, exclude)
}

function Solution (){
    //Function to return max value that can be put in knapsack of capacity W.
    this.knapSack=(W, wt, val, n)=>{ 
      return solve(W, wt, val, n-1)
    }
}
```
---
## APPROACH-2 Recursive + DP
```jsx
function solve(W, wt, val, index, dp){
    // Base Case
    if(index==0 ){
        if( wt[0]<= W) return val[0];
        else return 0;
    }
    // Step 2 -> check if we have already computed this value 
    if(dp[index][W]!==-1) return dp[index][W];

    let include=0;
    if (wt[index]<= W) include = val[index] + solve(W-wt[index], wt, val, index-1, dp)
    
    let exclude = 0+ solve(W, wt, val, index-1, dp)
    
    // Step -3 -> Store the value of the computation 
    dp[index][W] = Math.max(include, exclude)

    return dp[index][W]
}


function Solution (){
    //Function to return max value that can be put in knapsack of capacity W.
    this.knapSack=(W, wt, val, n)=>{ 
        // Step 1 -> create a dp array
        let dp = Array(n).fill( new Array(W+1).fill(-1));

      return solve(W, wt, val, n-1, dp)
    }
}
```
---

### Example 
```
W(capacity) = 8
n = 4
wt = [2, 3, 4, 5]
val = [1, 2, 5, 6]
```

| val | wt | i/w | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-----|----|-----|---|---|---|---|---|---|---|---|---|
| -   | -  | 0   | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1   | 2  | 1   | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 2   | 3  | 2   | 0 | 0 | 1 | 2 | 2 | 3 | 3 | 3 | 3 |
| 5   | 4  | 3   | 0 | 0 | 1 | 2 | 5 | 5 | 6 | 7 | 7 |
| 6   | 5  | 4   | 0 | 0 | 1 | 2 | 5 | 6 | 6 | 7 | 8 |


```jsx
// max(exclude , include)
 dp[i][w] = max{ dp[i-1][w], dp[i-1][w-wt[i]] + val[i] }
```

## Approach: 3 -> Bottom Up 
Space Complexility -> O(n*2) 
```jsx
const knapSack = (W, wt, val, n) => { 

  // build a dp n+1*W+1
  let dp = Array(n + 1)
    .fill(0)
    .map((el) => new Array(W + 1).fill(0));

  for (let i = 0; i < n; i++) {
    for (let w = 1; w <= W; w++) {
      let include = 0;

      if (wt[i] <= w) include = i == 0 ? val[i] : val[i] + dp[i - 1][w - wt[i]];

      let exclude = i == 0 ? 0 : dp[i - 1][w];

      dp[i][w] = Math.max(include, exclude);
    }
    console.log(dp[i]);
  }

  return dp[n - 1][W];
}
```

---

## Approach: 4 -> Optimised 
Space Complexility -> O(n)

```jsx
//since we are only using 2 rows of the dp -> prev and curr so we can improve the space complexity by 
const knapSack=(capacity, wt, val, n) => { 
    
      let dp = Array(2).fill(0).map(el=> new Array(capacity+1).fill(0));
          
      for( let index = 0; index <= n; index++){
        for (let w = 0; w <= capacity; w++){
           if(index == 0 || w == 0 ) dp[0][w] = 0;
  
            else {
              let include=0;
              if (wt[index -1]<= w) 
            include = val[index -1] + dp[0][w - wt[index - 1]]

            let exclude = dp[0][w];
            
            dp[1][w] = Math.max(include, exclude)
            }
        }
        dp[0] = [...dp[1]]
        console.table(dp)
      }
      
      return dp[1][capacity]
}

```