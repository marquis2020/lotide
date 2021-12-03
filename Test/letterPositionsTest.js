const letterPositions = require('./letterPositions')
const assert = require('chai').assert;

describe("#letter Positions", () => {
  it("returns [2,3] for finding l in hello", () => {
    const input = "hello";
    const expectedOutput = [ 1 ];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
  it("returns [1] for finding e in hello", () => {
    const input = "hello";
    const expectedOutput = [ 1 ];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
  it("returns [1] for finding e in hello", () => {
    const input = "hello";
    const expectedOutput = [ 1 ];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
  it("returns [1] for finding e in hello", () => {
    const input = "hello";
    const expectedOutput = [ 1 ];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
});








// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);