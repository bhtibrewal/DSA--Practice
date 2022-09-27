/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for (let word of strs){
        let key = [...word].sort().join();
         map[key]? map[key].push(word) : map[key] = [word]
        
    }
    return Object.values(map)
};


