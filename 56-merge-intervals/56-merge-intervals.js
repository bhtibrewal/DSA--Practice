/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]); //sort on the basis of first entry of that interval
    
    const arr=[intervals[0]]
    for(let interval of intervals){
        
        if(arr[arr.length-1][1] >= interval[0]){
            const prev = arr.pop();
            
            prev[1] = Math.max(prev[1], interval[1])
            arr.push(prev)
        }
        else arr.push(interval)
    }
    return arr;
};