function eqArrays(arr1, arr2) {
  let array1 = arr1;
  let array2 = arr2;
  // check if the array lengths are different
  // if (array1.length !== array2.length)
  //   return false;
  // loop through elements in an array to each other
  for (let i = 0, j = 0; i < array1.length; j++, i++) {
    // check whether the two elements of the array are equal
    if (array1[i] === array2[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2))
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}


function without(arr1,arr2){
let newArray = arr1;

let itemBeGone = arr2;

for (let item1 of itemBeGone) {

  newArray = newArray.filter(function (item1) {

      return !itemBeGone.includes(item1);
    })
  
  }
  return newArray;
}

console.log((without([1, 2, 3], [1]))) // => [2, 3]
console.log(without(["1", "2", "3"], ["3"])) // => ["1", "2"]

let words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"])

module.exports = without;