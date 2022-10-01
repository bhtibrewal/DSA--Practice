// deep copy
const user= {
    name : 'bhavika',
    age: 21,
    address: {
      city: 'jaipur',
      state: 'rajasthan'
    }
  }
  
  const deepCopyObject=(object)=>{
    if(!object) return object;
    const clonedObject= {};
    for (const key in object){
      value = object[key];
      clonedObject[key] = typeof value === 'object' ? deepCopyObject(value): value
    }
    
    return clonedObject;
  }
  const deeCopiedObject = deepCopyObject(user)