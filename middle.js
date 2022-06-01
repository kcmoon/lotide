const eqArrays = function(arr1, arr2) {
  let arrStr1 = JSON.stringify(arr1);
  let arrStr2 = JSON.stringify(arr2);

  if (arrStr1 === arrStr2) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr1) {
  let middleArray = [];

  if (arr1.length > 2) {
    if (arr1.length % 2 !== 0) {
      let oddIndex = ((arr1.length - 1) / 2);
      middleArray.push(arr1[oddIndex]);
    }
    
    if (arr1.length % 2 === 0) {
      let evenIndex1 = Math.floor((arr1.length - 1) / 2);
      let evenIndex2 = Math.ceil((arr1.length - 1) / 2);
      middleArray.push(arr1[evenIndex1], arr1[evenIndex2]);
    }
  }
  return middleArray;
};
  


assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);