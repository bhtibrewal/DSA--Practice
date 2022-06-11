/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const zeroes=[]
    for(let row=0; row<matrix.length;  row++){
        for (let col=0; col<matrix[row].length;  col++){
            if(matrix[row][col] === 0){
                zeroes.push({row, col})
            }
        }
    }
    console.log(zeroes)
    for(let {row, col} of zeroes){
        matrix[row] = Array(matrix[row].length).fill(0);
        for(let row in matrix){
            matrix[row][col] = 0
        }
    }
            
};