/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(num) {
     if (num <= 0) return '';
    
  const remainder = (num - 1) % 26; //
  num = Math.floor((num - 1) / 26); //26* 27 ->  27 ->

  return convertToTitle(num) + getChar(remainder);
    
};
const getChar = (num) => {
  return String.fromCharCode(num + 65);
};