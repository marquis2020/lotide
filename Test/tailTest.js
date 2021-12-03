//const tail   = require('../tail');
//const assertEqual = require('../assertEqual')

// assertEqual(tail([5,6,7]), 5);
//  assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
//  assertEqual(tail([2]), 2)
//  assertEqual(tail([]), );
//  assertEqual(tail([5,6,7]), 6);
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [7] of [5,6,7]]", () => {
    assert.deepEqual(tail([5, 6, 7]), [7]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5'); 
  });
  it("returns undifined of undifind", () => {
    assert.deepEqual(tail([]), );
  });
});