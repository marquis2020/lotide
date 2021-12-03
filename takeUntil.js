function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1 , arr2))
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}
function eqArrays(arr1, arr2) {
  var knownStringVar = "" + arr2;
  var knownStringVar1 = "" + arr1;
  // check if the array lengths are different
   if (knownStringVar1.length !== knownStringVar.length){
     return false;
   } else {}
  // loop through elements in an array to each other
  for (let i = 0, j = 0; i < arr1.length; j++, i++) {
    // check whether the two elements of the array are equal
    if (arr1[i] === arr2[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const takeUntil = (array, callback) => {
  // ...
  const resultArray = [];
  for (item of array) {
    if (!callback(item)) {
      resultArray.push(item);
    } else {
      return resultArray;
    }
  }
}

module.exports = takeUntil;
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1 ,[1, 2, 5, 7, 2,]); // => should PASS
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2 ,["I've", "been", "to", "Hollywood"]); // => should PASS
assertArraysEqual(results2 ,["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]); // => should fail
