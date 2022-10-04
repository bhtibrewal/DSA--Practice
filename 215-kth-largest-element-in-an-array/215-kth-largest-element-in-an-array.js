/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pq = new MinPriorityQueue();
    let n = nums.length;
    
    for (let i=0; i< k; i++)
        pq.enqueue(nums[i]);
    
    for(let i=k; i<n; i++ ){
        let topEl = pq.front().element;
        if (topEl < nums[i]){
            pq.dequeue();
            pq.enqueue(nums[i]);
        }
    }
    
    console.log(pq);
    return pq.front().element;
};