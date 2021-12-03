const eqArrays = require('./eqArrays');

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1 , arr2))
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}
// function eqArrays(arr1, arr2) {
//   var knownStringVar = "" + arr2;
//   var knownStringVar1 = "" + arr1;
//   // check if the array lengths are different
//    if (knownStringVar1.length !== knownStringVar.length){
//      return false;
//    } else {}
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
module.exports = assertArraysEqual;


//  assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]) ,true); // => should PASS
//  //eqArrays([1, 2, 3], [3, 2, 1]); // => should FAIL
// // //eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
//  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL 
//  assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS