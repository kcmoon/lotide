const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(460, 460);
assertEqual(460, 4600);
assertEqual("Tool", "Tool");
assertEqual("string", "String");