# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hibaqw/lotide`

**Require it:**

`const _ = require('@hibaqw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual,expected)`: Takes primitive types as parameters, checks their equality and           returns boolean value  
* `assertArraysEqual(arr1,arr2)`: Takes two arrays as arguments, checks their equality, returns and pass or failure message 
* `eqArrays(arr1,arr2)`: Takes two arrays as arguments, checks their equality, returns a boolean value
* `assertObjectsEqual(obj1,obj2)`: Takes two objects as agruments, checks their equality, and returns a pass or failure message
* `eqObjects(object1,object2)`: Takes two objects as arguments, checks their equality, returns a boolean message.
* `findKey(object,callback)`: Takes a object and callback function as arguments, and uses the condition in callback to "find" key- returns key itself or undefined (if key does not exist) 
* `findKeyByValue(object,value)`: Takes a object and value function as arguments, finds key by specified value and returns either the key found or undefined (if key does not exist)
* `head(arr)`: Takes an array as an argument, and returns the first element or head of array or undefined if array is empty
* `middle(arr)`:  Takes an array as an argument, and returns the middle element of the array (odd) or the two middle elements of an array (even). Returns an empty array if input array is empty or contains < 2 elements
* `tail(arr)`: Takes an array as an rgument, and returns the all array elements except its first element or  or an empty array if the input array is empty
* `letterPositions(arr)`: Takes an string as an argument, and returns an object containing the letters of the string passed as its keys and their positions in the string as its values. Returned object is empty if passed string is empty
* `map`: Takes an array and callback function as arguments, and returns an array populated by elements that were mapped from the original based on the callback. Returned array is empty if no value satisfies the condition(s) of the callback or if the original array is empty
* `takeUntil`: Takes an array and callback function as arguments, and returns an array populated by elements before the pivot element (pivot element is determined by the condition in callback). If no such element meets the condition, takeUntil returns an array populated by all the orginal elements. Returns empty array if input array is empty.
* `without`: Takes an array and callback function as arguments. Callback function identifies element(s) that need to be removed from array. Returns an array populated by all elements except those identified by the callback to be removed. Returns array filled with all original elements if non of the values match those identified by the callback or an empty array if the original array was empty.






