const assertEqual = require('./assertEqual');


function eqArrays(arr1, arr2) {
  // array length check
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, j = 0; i < arr1.length; j++, i++) {
    // element
    if (arr1[i] === arr2[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
module.exports = eqArrays;