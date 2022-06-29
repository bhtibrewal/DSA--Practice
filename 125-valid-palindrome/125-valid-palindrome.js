/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    return string === [...string].reverse().join('')
};