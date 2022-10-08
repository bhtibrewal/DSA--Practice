/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    //start from the top-right column
    let col = matrix[0].length - 1, row = 0;
    
    while(row< matrix.length && col>=0){
        let el = matrix[row][col]
        if (el == target)
            return true;
        el > target ? col-- : row++
    }
    return false;
};