// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')



// e6 shorthand property values
module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqObjects,
  findKey,
  findKeyByValue,
  countLetters,
  countOnly,
  letterPositions,
  map,
  takeUntil,
  without
};








// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   assertEqual: assertEqual,
//   assertArraysEqual: assertArraysEqual,
//   assertObjectsEqual: assertObjectsEqual,
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   letterPositions: letterPositions,
//   map: map,
//   takeUntil: takeUntil,
//   without: without,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,

// };
