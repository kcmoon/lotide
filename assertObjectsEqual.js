const eqArrays = function(arr1, arr2) {
  let arrStr1 = JSON.stringify(arr1);
  let arrStr2 = JSON.stringify(arr2);

  if (arrStr1 === arrStr2) {
    return true;
  }
  return false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  //console.log("obj1Keys", obj1Keys);
  //console.log("obj2Keys", obj2Keys)

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    //console.log("key", key)
    if (obj2Keys.includes(key)) {
      // console.log("obj1Key", key);
      // console.log('object1[key]', object1[key], 'object2[key]', object2[key] )
      // if a and b both equal arrays => use eqArrays function
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          // console.log("notMatch1", object1[key]);
          // console.log('notMatch2', object2[key]);
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};
let objA = { a: '1', b: 2 };
let objB = { b: 2, a: '1' };

console.log(assertObjectsEqual(objA, objB));

module.exports = assertObjectsEqual;