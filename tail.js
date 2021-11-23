const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🟩🟩🟩 Assertion Passed: [actual] === [expected]');
  } else if (actual != expected) {
    console.log('🔴🔴🔴 Assertion Failed: [actual] !== [expected]');
  } 
};

const tail = function(one,two){
  const tailOfOne = one[one.lenght -1]
  return tailOfOne;
}

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([2]), 2)
assertEqual(tail([]), );
assertEqual(tail([5,6,7]), 6);

