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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["lighthouse", "labs", "bootcamp"], ["lighthouse", "labs", "bootcamp"]);
assertArraysEqual(["lighthouse", "labs", "bootcamp"], [1, 2, 3]);