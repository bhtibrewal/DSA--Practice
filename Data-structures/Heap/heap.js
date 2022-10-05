// Building a heap TC -> O(n)
// insertion TC -> O(log n)
// deletion TC -> O(log n)

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function MaxHeap(size) {
    // we don't use the 0th index in heap to maintain the parent child relation 
    // Node  -> i, Left child-> 2*i, right child -> 2*i+1
    let arr = [0]
    this.size = 0;
    this.maxSize = size
    this.insert = function (val) {
        if (this.size + 1 > this.maxSize) {
            console.log("reached max heap size");
            return;
        }

        let index = ++this.size;
        // Step 1 -> insert the value at last index
        arr[index] = val
        while (index > 1) {
            let parent = Math.floor(index / 2);
            // Step2 -> if the order is right return
            if (arr[parent] >= arr[index]) return;
            // Step2 -> else swap the parent and curr element
            swap(arr, parent, index)
            // check the order for parent now
            index = parent
        }
    }
    // we delete the root node
    this.delete = function () {
        if (this.size == 0) {
            console.log("the heap is empty");
            return;
        }
        let index = this.size--
        //Step 1 -> place the last index in place of root node
        arr[1] = arr[index]
        // Step 2 -> remove the last node
        arr.pop();
        let i = 1;
        while (i < size) {
            let leftIndex = 2 * i, rightIndex = 2 * i + 1;
            if (leftIndex < size && arr[leftIndex] > arr[i]) {
                [arr[leftIndex], arr[i]] = [arr[i], arr[leftIndex]];
                i = leftIndex
            }
            else if (rightIndex < size && arr[rightIndex] > arr[i]) {
                [arr[rightIndex], arr[i]] = [arr[i], arr[rightIndex]];
                i = rightIndex
            }
            else {
                return;
            }
        }
    }

    this.print = function () {
        console.log(arr.slice(1))
    }
}

function Heapify(arr, n = arr.length - 1, i) {

    let leftIndex = 2 * i, rightIndex = 2 * i + 1, largest = i
    if (leftIndex <= n && arr[leftIndex] > arr[i]) {
        largest = leftIndex;
    }
    if (rightIndex <= n && arr[rightIndex] > arr[largest]) {
        largest = rightIndex;
    }
    if (largest !== i) {
        swap(arr, largest, i)
        Heapify(arr, n, largest)
    }
}

const maxHeap = new MaxHeap(5);
maxHeap.insert(50);
maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(20);
maxHeap.insert(60);
maxHeap.print();
maxHeap.delete();
maxHeap.print();

function HeapSort(arr, n) {
    while (n > 1) {
        swap(arr, 1, n);
        n--;
        Heapify(arr, n, 1)
    }
}
const arr = [0, 54, 53, 55, 52, 50];
let n = arr.length - 1;
for (let i = Math.floor(n / 2); i > 0; i--) {
    Heapify(arr, n, i);
}
console.log(arr);
HeapSort(arr, n)
console.log(arr);
