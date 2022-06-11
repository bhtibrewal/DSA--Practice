/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows, startValue=1) {
      const arr = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    row[0] = startValue;

    for (let j = 1; j < i; j++) {
      row[j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
    row[i] = startValue;

    arr[i] = row;
  }

  return arr;
};
