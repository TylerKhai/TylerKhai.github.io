// IF-ELSE STATEMENT

/* The "if" statement executes a statement if a specified condition is truthy.
* If the condition is falsy, another statement can be executed.
*/

/* if (condition)
*   statement1
* [else
*   statement2]
*/

function testNum(a) {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
}

console.log(testNum(-5));
// expected output: "NOT positive"


/* Multiple if-else statements can be nested to create an ELSE IF clause. 
*  NOTE that there is no ELSEIF (in one word) keyword in JavaScript.
*/

/*if (condition1)
*   statement1
*else if (condition2)
*   statement2
*else if (condition3)
*   statement3
*...
*else
*   statementN
*/

// To see how this works, this is how it would look if the nesting were properly indented:

/* if (condition1)
*   statement1
* else if (condition2)
*   statement2
* else if (condition3)
* 
* else
*  return statement
*/

// Use a block statement to execute multiple statements within a clause

/*if (condition) {
*   statements1
*} else {
*   statements2
* }
*/


// SWITCH

/* The switch statement evaluates an expression, matching the expression's value to a case clause, 
* and executes statements associated with that case, as well as statements in cases that follow the matching case.
*/

/* switch (expression) {
*  case value1:
*    //Statements executed when the
*    //result of expression matches value1
*    [break;]
*  case value2:
*    //Statements executed when the
*    //result of expression matches value2
*    [break;]
*  ...
*  case valueN:
*    //Statements executed when the
*    //result of expression matches valueN
*    [break;]
*  [default:
*    //Statements executed when none of
*    //the values match the value of the expression
*    [break;]]
*}
*/

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

/* In the following example, if expr evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement.
* When break is encountered, the program breaks out of switch and executes the statement following switch. If break were omitted, 
* the statement for case "Cherries" would also be executed.
*/

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");