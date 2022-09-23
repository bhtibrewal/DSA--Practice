/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0, j = 0
    while ( j< haystack.length && i< needle.length){
        console.log(haystack[j], needle[i])
        if(haystack[j++] == needle[i]) i++;
        
        else{ 
            j = j - i;
            i=0; 
        }
       
        
    }
    return i == needle.length ? j - i  : -1
};