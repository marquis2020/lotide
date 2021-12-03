const assertEqual = require('./assertEqual')


const findKeyByValue =function(object , value){
  //returing an array of object properties
  //using .find to return the third paramiter which is the key
  return Object.keys(object).find(function (key) {
      return object[key] === value;
    });
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;