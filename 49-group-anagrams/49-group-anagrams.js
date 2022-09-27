/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for (let word of strs){
        
         let key = [...word].sort().join();// time complex-> klogk

        // let count = new Array(26).fill(0);
        // for (let char of word) count[char.charCodeAt()-97]++;
        // let key = count.join("#");  // time complex-> k

         map[key]? map[key].push(word) : map[key] = [word]
        
    }
    return Object.values(map)
};


