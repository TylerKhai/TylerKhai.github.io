// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};

// we are gonna push are functions into this empty object.

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/



// uses dot notation on our empty object to acces the identity property.
_.identity = (anything) => {
    return anything;
};


/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = (anything) => {
if(typeof anything === "string"){
        return "string"; 
    }else if( Array.isArray(anything)){
        return "array";
    }else if(anything === null){
        return "null";
    }else if(typeof anything === "boolean"){
        return "boolean";
    }else if(typeof anything === "number"){
        return "number";
    }else if(anything === undefined){
        return "undefined";
    }else if(typeof anything === "function"){
        return "function";
    }else if(typeof anything === "object"){
        return "object";
    }
};




/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = (array, number) => {
   if(!Array.isArray(array) || number < 0) {
       return [];
   }if (!number) {
       return array[0];
   }else if (number > array.length){
      return array;
   }
   //looping over array to get the first number items of the array
   let index = 0;
   let resultArray = [];
   while (index < number) {
       resultArray.push(array[index]);
       index++;
   }
   return resultArray;
   };


/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = (array, number) => {
    if(!Array.isArray(array) || number < 0){
        return [];
    } if (!number) {
        return array[2];
    } else if(number > array.length){
        return array;
    }
    let index = 1;
    let resultArray = [];
    while (index <= number){
        resultArray.push(array[index]);
        index++;
    }
    return resultArray;
};
/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = (collection, iterator) => {
    // determine the type of collection
    // if collection is an array 
    if(Array.isArray(collection)){
     // loop over the array
        for(var i = 0; i < collection.length; i++){
            // call the function on each element, index, collection
            iterator(collection[i], i, collection);
        }
     }       

    //if collection is an object
   else if(typeof collection === 'object') {
       //loop over the object
       for (var key in collection) {
           //call the function on each value, key, collection
           iterator(collection[key], key, collection);
       }
   }
};





/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = (array, value) => {
   //need to check if this value is an element of this array
   //so we loop over it
   for (var index = 0; index < array.length; index++) {
       //when we go through the loop and it hits its first match we can stop and return the index
       if (array[index] === value) {
           return index;
       }
   }   // return -1 if value is not in the array
       return - 1;
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
   
   let newArray = [];
   //implementing _.each to iterate through the array to get the element, index, and array
   _.each(array, function(element, index, array) {
       //call function on each element
       //check which elements when calling function returned true
      if (func(element, index, array) === true) {
       //push array into new array
           newArray.push(element);
      }  
       
});          //if returned true, return a new array of elements
           return newArray;
};
/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = (array, func) => {
   let newArray = [];
    //call function for each element in array
   _.filter(array, function(element, index, array) {
      //if calling the function returned false
       if (func(element, index, array) === false) {
           //push items that returned false into new array
           newArray.push(element);
   }
});
           //return the new array
           return newArray;
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = (array, func) => {
   //create new array that will hold truthy values and the falsey values
   let newArray = [];
   //push the values which were true into newArray
   newArray.push(_.filter(array, func));
   //push values which were false into newArray
   newArray.push(_.reject(array,func));
   return newArray;
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = (array) => {
    // return a new array with dublicates removed
    // we will use _.indexOf();
    let result = [];
    // create an empty array
    for (var i = 0; i < array.length; i++){
        // iterate over _.input array
   
        //use index of to see if current element exists in the array
        // if its not there

            // add current element to new array
        if(_.indexOf(result, array[i]) === -1){
            result.push(array[i]);
        }
    }
    return result;
    //return new array
};    
    
/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = (collection, func) => {
   //create empty array
   let newArray = [];
   //if collection is an array or collection is an object
   if(Array.isArray(collection)) {
       //iterate through array to get element, index, collection
       for( var i = 0; i < collection.length; i++) {
           //call the function on each value, index, collection
          func(collection[i], i, collection);
          //push the return value of thr function call into the new array
          newArray.push(func(collection[i], i, collection));
   }
}
    //if collection is an object
   else if(typeof collection === 'object') {
       //loop over the object
       for (var key in collection) {
           //call the function on each value, key, collection
           func(collection[key], key, collection);
           //push the return value of thr function call into the new array
           newArray.push(func(collection[key], key, collection));
       }
   }  
   //return new array
       return newArray;
};
/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (array, prop) => {
   //return array of values using map
   return _.map(array, function(element){return element[prop]});
   
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
 
 _.contains = (array,value) => {
     
     // return (your condition here) ? (what returns if your condition is true) : (what returns if its false);
     return array.includes(value) ? true :false;
 };

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = (collection, func) => {
    if (typeof func !== 'function'){
        // loop to determine truthyness or false of element
        for (var i = 0; i < collection.length; i++){
            if(collection[i]){
                return true;
            } else {
                return false;
            }
        }
    }
    if(Array.isArray(collection)){
        for(var i=0; i <collection.length; i++){
            //call function on each value, index collection
            //return false if the value of calling the function for any element is false
            if(func(collection[i], i, collection) === false){
                return false;
            }
       }
    }
    else if(typeof collection === 'object') {
        //loop over the object
        for (var key in collection){
            //call the function on each value, key, collection
            if(func(collection[key], key, collection) == false){
                return false;
            }
        }
    }
    return true;
};

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (collection, func) => {
    if (typeof func !== 'function') {
    //loop to determine truthyness or false of element
       for (var i = 0; i < collection.length; i++) {
           //if
           if(collection[i]) {
               return true;
           } else {
               return false;
           }
       }
   }
   //if collection is an array
   if(Array.isArray(collection)) {
       //iterate through array to get element, index, collection
       for( var i = 0; i < collection.length; i++) {
           //call the function on each value, index, collection
          //return false if the value of calling the function for any element is false
          if(func(collection[i], i, collection) === true){
          return true;
       }
   }
   }
       //if collection is an object
   else if(typeof collection === 'object') {
       //loop over the object
       for (var key in collection) {
           //call the function on each value, key, collection
           if(func(collection[key], key, collection) === true) {
               return true;
           }
       }
   }
       return false;
}

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (array, func, seed) => {
  var result;
  //assign first element to result if seed isn't given
  if(typeof seed === 'undefined'){
      result = array[0];
      //call func for every element of the array
      //iterate with for loop
      for(var i = 1; i < array.length; i++){
          result = func(result, array[i], i);
      }
  }
  else{
      result = seed;
      //call func for every element in the array
      //iterate through array with for loop
      for(var i = 0; i < array.length; i++){
      //call function with previous result, element of the array, index
          result = func(result, array[i], i);
      }
  }
 
  return result;
};

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = (...obj) => {
    //loop through array of objects
    for(var i = 1; i < obj.length; i++){
        //for in loop to loop through each objects properties
        for(var key in obj[i]){
            //update first objects properties using other objects properties
            obj[0][key] = obj[i][key];
        }
    }
    return obj[0];
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
