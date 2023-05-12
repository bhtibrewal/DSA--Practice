// deep copy
const user = {
  name: 'bhavika',
  age: 21,
  address: {
    city: 'jaipur',
    state: 'rajasthan'
  }
}

export default function deepClone(object) {
  if(typeof object !== "object" || object == null) return object;

 const clonedObject = {};

  for ( let key in object ){
    let value = object[key];
    clonedObject[key] = deepClone(value);
  }
  return clonedObject;
}
const deeCopiedObject = deepCopyObject(user)