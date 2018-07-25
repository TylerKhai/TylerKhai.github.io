// ASSIGNMENT OPERATORS

// An assignment operator assigns a value to its left operand based on the value of its right operand.

var x = 2;
var y = 3;

console.log(x);
// expected output: 2

console.log(x = y + 1); // 3 + 1
// expected output: 4

console.log(x = x * y); // 4 * 3
// expected output: 12


// ARITHMETIC OPERATORS

/* Arithmetic operators take numerical values (either literals or variables) as their operands and return a 
* single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), 
* and division (/).
*/

// Number addition and subtraction
console.log(2 + 3 - 1);
// expected output: 4

// Number multiplication and division
// console.log(4 * 3 / 2); // 12 / 2
// expected output: 6

// Number remainder and exponential
// console.log(11 % 3 ** 2); // 11 % 9
// expected output: 2

//COMPARISON OPERATORS

// Comparison operators are used in logical statements to determine equality or difference between variables or values.
//      if x = 5
/*  == ,	(equal to),	x == 8	,false	
*                       x == 5	,true	
*  ===,	(equal value and equal type),	x === "5"	,false	
*                                   x ===  5	,true	
*  !=,	(not equal),	x != 8 	  ,true	
*  !==,	(not equal value or not equal type)	x !== "5"	,true	
*                                           x !==  5	,false	
*  >,	(greater than)	x > 8	false	
*  <,	(less than)	x < 8	true	
*  >=,	(greater than or equal to)	x >= 8	false	
*  <=,	(less than or equal to)	x <= 8	true
*/


// LOGICAL OPERATORS

// Logical operators are used to determine the logic between variables or values.
//     if x = 6 and y = 3

/* &&, and	,(x < 10 && y > 1) is true	
* ||,  or	,(x === 5 || y === 5) is false	
* !	,  not	,!(x === y) is true
*/

//BINARY OPERATORS 

// TYPEOF

// The typeof operator returns the type of a variable or an expression:
/* typeof ""                 // Returns "string"
* typeof "Tyler"              // Returns "string"
* typeof "Tyler Tran"          // Returns "string"
*/


// TERNARY OPERATORS

/* The conditional (ternary) operator is the only JavaScript operator that takes three operands. 
* This operator is frequently used as a shortcut for the IF statement.
*/

function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
