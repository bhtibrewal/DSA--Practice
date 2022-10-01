function flattenArray(array) {
    const newArray = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            newArray.push(...flattenArray(element));
        } else {
            newArray.push(element);
        }
    }

    return newArray;
}

// depth flatten
function flattenArray(array, depth=1) {
    const newArray = [];
    if (depth<=0) return array;
    for (const element of array) {
        if (Array.isArray(element)) {
            newArray.push(...flattenArray(element, depth-1));
        } else {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(flattenArray([0, 1, 2, [[[3, 4]]]], 4))

// -----------------------------------------------------------------------------


const flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a;

const deepFlatten = (arr, depth = 1) => {
  return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? deepFlatten(val, depth - 1) : val), [])
                : arr.slice();
}