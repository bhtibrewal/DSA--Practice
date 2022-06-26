/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    transpose(matrix);
    matrix.map(e=>e.reverse()); // reverse each row 
};

// only for matrix.length == matrix[i].length
function transpose(matrix){
    for (let i=0; i<matrix.length-1; i++){
        for (let j=i; j<matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};

/* 
const transpose = matrix => {
    const n= matrix.length, m= matrix[0].length;
    const arr = []
  
    for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
        arr[j] = arr[j] ? [...arr[j], matrix[i][j]]: [matrix[i][j]] 
      }
    }
    return arr;
  } */

/* const transpose=(matrix)=>matrix[0].map((_,  i) => matrix.map(b => b[i])); */

/* swap function
function swap(matrix, i, j){
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
} */