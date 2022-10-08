/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = matrix[0].length;
    for (let row = 0; row<= matrix.length-1; row++){
        if (matrix[row][0] <= target && matrix[row][col- 1] >= target){
            let ans = binarySearch(matrix[row], target, 0, col-1);

            return ans!==-1 ? true : false
        }
    }
    return false;
};

const binarySearch = (arr, key, start, end) => {
    console.log( key, start, end)
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        
        if (arr[mid] == key) {
            return mid;
        }
        if(arr[mid] > key){
            end = mid - 1;    
        }
        else {
            start = mid + 1;
        }
        
        mid = Math.floor((start + end) / 2);
        
    }
    return -1;
}