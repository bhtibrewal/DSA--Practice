/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// const transpose=(matrix)=>matrix[0].map((_,  i) => matrix.map(b => b[i]));

const transpose = matrix => {
  const n= matrix.length, m= matrix[0].length;
  const arr = []

  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      arr[j] = arr[j] ? [...arr[j], matrix[i][j]]: [matrix[i][j]] 
    }
  }
  return arr;
}

// function transpose(matrix){
//     for (let i=0; i<matrix.length-1; i++){
//         for (let j=i; j<matrix.length; j++){
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
//     return matrix;
// }