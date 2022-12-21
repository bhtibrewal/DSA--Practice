//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if(arr[i] === -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) {
        arr[j] = input_line[j];
    }
    let obj = new Solution();
    obj.quickSort(arr,0,n-1);
    printArray(arr,arr.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */
 
class Solution
{
    swap(arr, a, b){
       [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    
    partition(arr, low, high){
        const pivot = arr[high];
        let i = low;
        for (let j = low; j <= high - 1; j++)
                if (arr[j] <= pivot) {
                        this.swap(arr, j, i);
                        i++;
                }
        this.swap(arr, i, high);
        return i;
}
    
    quickSort(arr, low, high){
    if (low < high) {
        /* pi is partitioning index */
        const pi = this.partition(arr, low, high);
  
        // Separately sort elements before
        // partition and after partition
        this.quickSort(arr, low, pi - 1);
        this.quickSort(arr, pi + 1, high);
    }
}
    
}