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

const letterPositions = function(sentence) {
  const results = {};
  
  let newSentence = sentence.toLowerCase();

  for (let i = 0; i < newSentence.length; i++) {
    //console.log("letters", letters);
    if (results[newSentence[i]]) {
      // get array from present key
      // the push index array into the found array
      let tempArray = results[newSentence[i]];
      tempArray.push(i);
      // associate this updated array to the key that was already present
      results[newSentence[i]] = tempArray;
    } else {
      results[newSentence[i]] = [i];
    }
    
  }
  //console.log("results", results);
  return results;
};

letterPositions("hello");

let result1 = letterPositions("hello");
let result2 = letterPositions("lighthouse in the house");

assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

assertArraysEqual(result2["l"], [0]);
assertArraysEqual(result2["i"], [1, 11]);
assertArraysEqual(result2["h"], [3, 5, 15, 18]);
assertArraysEqual(result2["e"], [9, 16, 22]);