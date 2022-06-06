const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["lighthouse", "labs", "bootcamp"], ["lighthouse", "labs", "bootcamp"]);
assertArraysEqual(["lighthouse", "labs", "bootcamp"], [1, 2, 3]);