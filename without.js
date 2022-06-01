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
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const without = function(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["lighthouse", "labs", "bootcamp"], [1, 2, "bootcamp"]), ["lighthouse", "labs"]);
assertArraysEqual(without(["lighthouse", "labs", "bootcamp"], [1, 2, "bootcamp"]), [1, 2]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);