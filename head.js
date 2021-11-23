const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🟩🟩🟩 Assertion Passed: [actual] === [expected]');
  } else if (actual != expected) {
    console.log('🔴🔴🔴 Assertion Failed: [actual] !== [expected]');
  } else if (actual.length < 0) {
    console.log('✅🟢✅ Assertion Passed: undefined === undefined')
  }
};

const head = function(one, two) {
return one[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2)
assertEqual(head([]), );
assertEqual(head([5,6,7]), 6);
