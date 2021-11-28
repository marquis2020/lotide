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

