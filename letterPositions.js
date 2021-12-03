// function assertArraysEqual(arr1, arr2) {
//   if (eqArrays(arr1, arr2))
//     return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   else
//     return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
// }

// function eqArrays(arr1, arr2) {
//   // check if the array lengths are different
//   if (arr1.length !== arr2.length)
//      return false;
//   // loop through elements in an array to each other
//   for (let i = 0, j = 0; i < arr1.length; j++, i++) {
//     // check whether the two elements of the array are equal
//     if (arr1[i] === arr2[j]) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];

    if (letter !== ' ') {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    } 
    
  }
  return results;
};

module.exports = letterPositions

//  assertArraysEqual(letterPositions("hello").e, [1]);
//  assertArraysEqual(letterPositions("hello").h, [0]);
//  assertArraysEqual(letterPositions("hello").e, [1]);
//  assertArraysEqual(letterPositions("hello").l, [2, 3]);
//  assertArraysEqual(letterPositions("hello").o, [4]);