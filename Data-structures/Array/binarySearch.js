
// O(log n)
const binarySearch = (arr, key) => {
    let start = 0, end = arr.length - 1
    let mid = Math.floor((start + end) / 2);

    while (start < end) {
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
    return - 1;
}