/*
1. The 2 phases of using functions first we must Declare. 
Next we can execute (or two other words for executing a function?) a function by?
Involking or Calling
*/

/*
2. What’s the difference between a function’s parameters and arguments PASSED to a function?
--> parameters are placeholders for our function
--> arguments are the actual values you'd like to invoke the function on enclosed in the parathesis

Defining ---> function adder (parameter, parameter) { 
    console.log(parameter + parameter);
} 

Invoking --->  adder(arguement, arguement);


3. What’s the syntax for a NAMED function?
Simply giving a function a name;

function myName(){  --> this is naming a function, using the function keyword and then giving it a name
    //add code
}
myName();



4. How do we assign a function to a variable?

var multipler = function(x) {
  return  x * x;
}

console.log(multipler(10));


5. Functions can OPTIONALLY take inputs and OPTIONALLY return a single value,
how do we specify inputs, and how do we return a value?

var name = prompt(Whats is users name?);
function noInput(){
     console.log(name + "is an up and coming programmer");
}

noInput();

function inputTaker(base) {
     return function inputer(value) {
         value > base;
     }
     inputer;
}

inputTaker();

6. NOTE: Primitive (simple) values are passed to a function BY COPY, complex by reference. Try it!

var x = 24; 

function add(){
    return x + x;
}

add(); returns 48 becasue the variable x is copied from the global scope and passed into the function

var obj = {
  nameFirst: "Melvin",
  nameLast: "Miller"
  age: 23;
}

function myObj(obj){
    return ;
}

myObj(obj);

7. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

var str = "Keep up the good work";

function grabParentVariables() {
    if (typeof str === "string") {
        str = "work harder";
    }
}

grabParentVariables()

8. Closures: Functions form closures around the data they house.
 If an object returned from the Function and is held in memory somewhere (referenced), 
that closure stays ALIVE, and data can continue to exist in these closures!
(See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
*/


function outer(value){
     function inner(base){
        return value < base;
    } 
    
return inner;
}

outer();