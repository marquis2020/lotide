const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


const eqObjects = function(object1, object2) {
  // returning an array of objects and compares their length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    //checking if the value at a certen key is an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //if the values at these keys are not equal return false
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false