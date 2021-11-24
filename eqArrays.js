const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🟩🟩🟩 Assertion Passed: [actual] === [expected]');
  } else {
    console.log('🔴🔴🔴 Assertion Failed: [actual] !== [expected]');
  }
};
let eqArrays = function(arrayOne, arrayTwo){
  console.log(arrayOne, arrayTwo)
  let sameArray = true;
  if (arrayOne.length !== arrayTwo.length) {
    console.log('not a match')
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    arrayOne[i] === arrayTwo[i] ? check = true : check = false;
    if (check === false) {
      console.log('not a match')
      return false;
    } 
    console.log('perfect match')
  }
  
  return sameArray;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false