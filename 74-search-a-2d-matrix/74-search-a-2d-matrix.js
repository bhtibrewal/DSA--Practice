/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = matrix[0].length - 1, row= matrix.length-1;
    
    let start = 0, end = row;
    let mid = Math.floor((start + end)/2);
    
    while (start <= end){
        console.log(start, mid, end)
        if (matrix[mid][0] <= target && matrix[mid][col] >= target){
            let ans = binarySearch(matrix[mid], target, 0, col);

            return ans!==-1 ? true : false
        }
        if(matrix[mid][0] > target){
            end = mid - 1;    
        }
        else {
            start = mid + 1;
        }
        
        mid = Math.floor((start + end)/2);
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