// function eqArrays(arr1, arr2) {
//   let arr11 =arr1;
//   let arr22 = arr2;
//   // check if the array lengths are different
//   if (arr11.length !== arr22.length)
//     return false;
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



// function assertArraysEqual(arr1, arr2) {
//   if (eqArrays(arr1, arr2))
//     return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   else
//     return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
// }

const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./eqArrays')
function middle(arrayToCut){
  let middleArray =[];
  let middleIndex = 0;
  //let arrayToCut1 = arrayToCut;
  if (arrayToCut.length <= 2) {
    return middleArray;
  } else {
   if (arrayToCut.length % 2 === 0) {
    middleIndex = (arrayToCut.length / 2) - 1;
    middleArray.push(arrayToCut[middleIndex]);
      
    middleIndex = (arrayToCut.length / 2);
    middleArray.push(arrayToCut[middleIndex]);
    //console.log(middleArray);
    return middleArray;
  } else {
    middleIndex = Math.ceil(arrayToCut.length / 2) - 1;
    middleArray.push(arrayToCut[middleIndex]);
    return middleArray;
  }
  }
}



//assertArraysEqual(middle())
module.exports = middle;