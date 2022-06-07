const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  let newString = string.toLowerCase().replace(/ /g, "");
  //console.log("newString", newString);
  let letterKeys = "";

  for (let letters of newString) {
    //console.log("letters", letters)
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  //console.log("results", results);
  return results;
};


let result1 = countLetters("Lighthouse in the House")

assertEqual(result1.l, 1);
assertEqual(result1.h, 4);
assertEqual(result1.o, 2);

module.exports = countLetters;