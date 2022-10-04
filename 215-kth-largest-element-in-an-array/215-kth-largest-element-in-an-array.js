/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pq = new MinPriorityQueue();
    let n = nums.length;
    
    // form a min heap of k elements 
    for (let i=0; i< k; i++)
        pq.enqueue(nums[i]);
    
    // for rest of the elements keep on checking if 
    // currEl is greater than the topEl dequeue the topEl and add the currEl
    for(let i=k; i<n; i++ ){
        let topEl = pq.front().element;
        if (topEl < nums[i]){
            pq.dequeue();
            pq.enqueue(nums[i]);
        }
    }
    // finally we have a min heap of k largest elements in the array
    // so the topEl is the kth largest el
    
    console.log(pq);
    return pq.front().element;
};