function assertArraysEqual(arr1, arr2) {
  
  if (eqArrays(arr1 , arr2)){
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }else{
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  
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
  
  
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;
}
module.exports = map;
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);



    
