const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      //console.log("obj1Key", key);
      //console.log('object1[key]', object1[key], 'object2[key]', object2[key] )
      // if a and b both equal arrays => use eqArrays function
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          //console.log("notMatch1", object1[key]);
          //console.log('notMatch2', object2[key]);
          return false;
        }
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//console.log(eqObjects(ab, abc));

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);



assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;