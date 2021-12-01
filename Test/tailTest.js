const tail   = require('../tail');
assertEqual(tail([5,6,7]), 5);
 assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(tail([2]), 2)
 assertEqual(tail([]), );
 assertEqual(tail([5,6,7]), 6);