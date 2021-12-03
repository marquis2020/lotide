const assertEqual = require('./assertEqual');

const countLetters = function(stringToCount) {
  const results = {}

  for(const charaters of stringToCount){
    if (charaters === " ") {}
      if (results[charaters]) {
        results[charaters] += 1;
      } else {
        results[charaters] = 1;
      }
    
  }
  console.log(results)
  return results;
};

const stringToCheck = "lighthouse in the house";
const result1 = countLetters(stringToCheck);

assertEqual(result1["t"], 1); // should fail
assertEqual(result1["h"], 4); // should pass
assertEqual(result1["e"], 3); // should pass
assertEqual(result1["l"], 2); // should fail

module.exports = countLetters;