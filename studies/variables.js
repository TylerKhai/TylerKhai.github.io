/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables 
 * are named identifiers that can point to values of a particular type, like a Number, String, 
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we 
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */ 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
console.log(myVariable);





// 0. Defining Let
/* Let allows you to declare variables that are limited in scope to the block, or expression in which it was used
--> Are alos hoisted to the top of their code block
*/

function varTester() {
  var m = 11;   // assigns the variable m to the number 11 using var
  if (true) {   // creates a condition with a boolean value of true, so the code will automatically run the first block
    var m = 22;  // same variable!, if true, the variable gets reassigned even though its in a diferent block scope
    console.log(m);  // prints 22 because of the reassignment and con
  }
  console.log(m); // prints 22 here as well because once reassigned its no turning around unless reassigned back to original value 
}

function letTester() {
--> let m = 11; // assigns the variable m to the number 11 using let
  if (true) {
    let m = 22;  // different variable, 
    console.log(m);  // prints 22 here becasue a new let 
    //variable was assigned in a different code block even though the condition was true
  }
-->  console.log(m);  // prints 11 here because the let that was declared earlier in the function is in the same block scope
// the arrows indicate that they are in the same scope
}

/* 2 The difference in the code is, now matter was scope a var is declared in it can be reassigned in another scope
Since let is blocked scope its restriced to whatever scope it was declared in 
*/

/*
4 Redeclaring the same variable within the same function or block scope raises a SyntaxError.

Ex.
/* function {
//   let variable;
//   let variable;
 }
*/






// 1 Defining Const

/*  2 Constants
- Are blocked scope, pinned to whatever block they are assigned/decleared to.
function topper(){
   const top = "pinnacle";
  if(typeof top === 'string'){
    console.log('yes');
  } else {
    top = 'peak';  // trying to reassing top here wont work/ syntaxk error
    console.log('Nope');
  }
}



3 - conts are Not hoisted to the top of there enclosed code block
- Values will not be defined until assignment

function triple () {
  console.log(three); throws error because not assigned
  
  const three = 3; was declared and assigned
  console.log(three); prints 3 becasue they are assinged
}


4 Constants--
- Containers that hold vaules that can't be changed, no reassignment.
- If a constant variable is used or declared and not assigned then that particular 
const will never be able to be reassigned or have value added to it like so
*/

//ex of const without adding value
/*
const deadVariable;
*/
  
  
  
  


/* 1 Closures
 --> When child scopes can access variables from the parent scope;

var name = "Melvin"; 
  
function greetPerson(){
console.log("Hello " + " " + name + " " + "How are you?");
}

greetPerson();

This function is one of the many examples of how clousure works;

line 131 - declares and assign a variable name
line 133 - creates a function greetPerson and
prints the string ("Hello "), + (Global variable(name)) +, and another string ( how are you )
line 137 - involkes function without passing in any arguements because the greetPerson fucntion 
has access to the lexical/parent/global scope
because the majority of function are closures

*/