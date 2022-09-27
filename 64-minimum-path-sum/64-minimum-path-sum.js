/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
//     if (r<0 || c<0 || r> grid.length-1 || c> grid[0].length -1) return 
    
//     grid[r+1][c] // move down 
//     grid[r][c+1] // move right
    
    const m = grid.length, n = grid[0].length;
    
    for(let i=1; i< m; i++){
        grid[i][0] += grid[i-1][0];
    }
    for(let i=1; i< n;i++){
        grid[0][i] += grid[0][i-1]
        for(let j=1; j< m; j++)
            grid[j][i] = Math.min(grid[j-1][i], grid[j][i-1]) + grid[j][i]
    }
    console.table(grid)
    return grid[m-1][n-1]
};