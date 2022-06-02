const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {

  for (let k in object) {
    if (object[k] === value) {
      return k;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "That 70's Show");

const bestHeroesByComic = {
  marvel: "Iron Man",
  dc: "Batman",
  sony: "Sonic"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(bestHeroesByComic, "Iron Man"), "marvel");
assertEqual(findKeyByValue(bestHeroesByComic, "Batman"), "dc");
assertEqual(findKeyByValue(bestHeroesByComic, "Spider-man"), undefined);