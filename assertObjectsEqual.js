
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(object1 , object2))
    return console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  else
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object1)}`);
};
//assertObjectsEqual();
 const cd = { c: "1", d: "2" };
 const dc = { d: "2", c: "1" };
 assertObjectsEqual(cd , dc );

 var myObjected = {
  'key-1': 42,
  keyB: 'value B',
  'keyC': [1, 2, 3]
  };

  console.log(myObjected)

  module.exports = assertObjectsEqual;