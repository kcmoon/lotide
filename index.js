const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findkey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  map: map,
  takeUntil: takeUntil,
  without: without,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
};