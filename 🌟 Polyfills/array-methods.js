Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    // Accepting arguments passed to newFunc
    return function (...newArgs) {
      func.apply(obj, [...args, ...newArgs]);
    };
  };

  Function.prototype.myCall = function(obj, ...args){
    obj.fn = this;
    const result = obj.fn(...args);
    delete obj.fn;
    return result
  }

  Array.prototype.customMap = function(callback) {
    let newArray = [];

    for(let item of this) {

      newArray.push(callback(item));
    }

    return newArray;
  }

  Array.prototype.myReduce=function(callback, startValue){
    for (let val of this){
      startValue = startValue!==undefined? callback(startValue, val) : val
    }
    return startValue;
   }

   Array.prototype.myForEach = function(callback){
    for (let i=0;i< this.lenth;i++){
      this[i] = callback(this[i], i, this)
    }
  }