const assertEqual = require('./assertEqual');

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

 

