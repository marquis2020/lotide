const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

 const tail = function(one,two){

  if (one.length === 0) {
    return undefined;
  }
  if (one.length === 1) {
    spOne = one[0];
    return spOne;
  }
   const tailOfOne = one.slice(-1)
   return tailOfOne;
 }

 assertEqual(tail([5,6,7]), 5);
 assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(tail([2]), 2)
 assertEqual(tail([]), );
 assertEqual(tail([5,6,7]), 6);

// const tail = function(array) {
//   array = array.slice(1);
//   return array;
// };
// const assertEqual = function(a, b) {
//   if (a === b) {
//     console.log('🟩 Passed');
//   } else {
//     console.log('🟥 Failed');
//   }
// };
// assertEqual(tail([5, 6, 7]), [6, 7]);
// assertEqual(tail([5, 6, 7]), [5, 6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertEqual(tail([5, 6, 7]), 6);