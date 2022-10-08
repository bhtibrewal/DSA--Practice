/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = matrix.length , col = matrix[0].length ;
 
    // indexes
    let srow = 0, scol = 0, erow = row-1, ecol = col-1;
    let output = [];
    
    while (srow<= erow && scol<=ecol){

        // first row
        for (let i=scol; i<= ecol; i++)
            output.push(matrix[srow][i]);
        srow++;
        
        // last column
        for (let i=srow; i<=erow; i++){
            output.push(matrix[i][ecol]);
        }ecol--;
        
        // last row
        for (let i = ecol ;srow<= erow && i>=scol; i--)
            output.push(matrix[erow][i]);
        erow--;
        
        // first column
        for (let i = erow ;scol<=ecol && i>=srow; i--)
            output.push(matrix[i][scol]);
        scol++;
        
    }
        
    return output;
    
};