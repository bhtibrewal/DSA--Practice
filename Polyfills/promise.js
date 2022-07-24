const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("1"), 100)
    // resolve("1")
  })
  const promise2 = new Promise((resolve, reject)=>{
    reject("2")
  })
  const promise3 = new Promise((resolve, reject)=>{
    resolve("3")
  })
  
  Promise.customAll = function(arr){
    var result = [];
    
    return new Promise((resolve, reject)=>{
      for(let i in arr ){
        arr[i].then(res=> {
          result.push(res)
          if(i === arr.length) resolve(result);
        }).catch(err=> reject(err));
      }
    })
  }
  
  // const promise= Promise.customAll([promise1, promise2, promise3]);
  
  
  Promise.customAllSettled = function(arr){
    var result = [];
  
    return new Promise((resolve, reject)=>{
      for(let i in arr ){
        arr[i].then(res=> {
          result.push({status: "fulfilled", value: res})
        }).catch( reason=> {
          result.push({status: "rejected",reason})
        }).finally(()=>{
          if(result.length === arr.length) resolve(result)
        });
      }
    })
  }
  
  // const promise= Promise.customAllSettled([promise1, promise2, promise3]);
  
  Promise.customRace = function(promises){
    
    return new Promise((resolve, reject) => {
      for(let i in promises ){
        promises[i]
        .then(res => resolve(res))
        .catch((error) => reject(error));
      }
    })
  }
  // const promise= Promise.customRace([promise1, promise2, promise3]);
  
  Promise.myAny = function (promises) {
    const errors = [];
  
    return new Promise((resolve, reject) => {
      for (const promise of promises) {
        promise
          .then((result) => resolve(result))
          .catch((error) => errors.push(error))
          .finally(() => {
            if (errors.length >= promises.length) reject(errors);
          });
      }
    });
  };
  
  const promise = Promise.myAny([promise1, promise2, promise3]);
  promise.then((res) => console.log(res)).catch((err) => console.log(err));