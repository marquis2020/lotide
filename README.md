# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @marquis2021/lotide`

**Require it:**

`const _ = require('@marquis2021/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: takes in two values, one array and one value and tests if the value matches the first index of the Array.
* `tail(...)`: takes in two values, one array and one value and tests if the value matches the last index of the Array.
* `middle(...)`: finds the middle value of an array.
* `eqArray(...)`: eqArrays which takes in two arrays and returns true or false, based on a perfect match.
* `assertEqual(...)`: returns true if two primitive values are input
* `assertArraysEqual(...)`: will take in two arrays and console.log an appropriate message to the console.
* `assertObjectsEqual(...)`: will take in two objects and console.log an appropriate message to the console.
* `eqObjects(...)`: evaluates whether two objects are equal
* `findKey(...)`: takes in an object and a callback. preforms callback action on 
* `findKeyByValue(...)`: finds a key of an object by checking the values
* `countLetters(...)`: take in astring and then return a count of each of the letters in that sentence.
* `countOnly(...)`: counts all instances of array values appearing
* `letterPositions(...)`: returns an object with all the letters found within the string and their indexes
* ` map(...)`: preforms a function on each element of an array
* `takeUntil(...)`: returns the first element of an array for which the function returns false
* `without(...)`: will return a subset of a given array, removing unwanted elements.