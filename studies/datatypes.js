/*  DATATYPES:

 PRIMITIVE/SIMPLE DATATYPES:
 strings - character data( a string of characters Ex: "tyler")
 numbers - Numeric data( numbers Ex: 123, 1.23 )
 booleans - true or false (code that executes based on if that code is true or false)
 NaN - Not a Number (typeOf NaN; => number )
 undefined - no-value (Ex: var name =;)
 null - no-value (the programer will intentionally do this)

 Primitive/Simple datatypes copies by value. 

 copy by value example :
 
 var a = 2;
 var b = a; the value stored in a is COPIED into b

 b = 54 // changing b doesnt affect the value stored in a

 console.log(a) // will print 2.


 Primitive/Simple datatypes do not hold ,collect, or aggitate or values (They are immutable).

 copy by reference example :
 
 var a = {one: 'rip'};
 
 
 * Here, the value stored in b is a REFERENCE to the value stored in a
 * they now both point to the same object
 
 var b = a;
 
 * changing the value of b affects ALL the references 
 * because the value is reference to the same object
 
 b.one = 'peronni';
 console.log(a.one); // outputs 'peronni'.
 
 COMPLEX DATATYPES:
 
 
 objects - are a collection of key/valued pairs, we can consider "key" as the postition of of a value in an object
    we create and object using the curly brackets( {} ),
    and we can access them by using dot notation or bracket notation.
    
    dot notation:
        -user.firstName;
        -user.lastName;
        -user.age;
        
    bracket notation:
        -user['firstName'];
        -user['lastName'];
        -user['age'];
    
  Examples:  
 { } // empty literal object
 {name: 'Tyler'} // OBJECT WITH one key , value pair where name is the KEY and 'Tyler' is the VALUE

 {name: 'Tyler', age: 24} // object with twi key - value pairs




 
 arrays - are a collection that allows us to store a list of values.
    we create an array by using the square brackets ( [] ).        
    arrays are zero indexed list, meaning we have to access that arrays index number by using bracket notation.
    
    Example:

  var userAges = [15, 25, 76, 11, 54, 100, 3];
  userAges[0];// will accesses the first index which is 15.
  userAges[5];// will accesses the fifth index which is 100.




 functions - allow us to encapsulate a block of code and execute that block of code whenever we call it.
 
 there are two ways of creating a function:
        - function declaration/definition.
        - function call/invocation/execution.
    
    Ex:
    function declaration: 
        function functionName(parameter1,parameter2,...){
            //function body-code goes here!
        }
        
        function add(num1,num2){
            return num1 + num2;
        }
    function call:
        function name(argument1,argument2);
        
        add(10,25)// will return 35.
*/  


/*Infinity and -Infinity
    The global Infinity property is a numeric value representing infinity, it's a variable in global scope.
    The value of infinity is greater than any other value.
    Any number divided by inifinity is 0.
    Any positive number multiplied by Infinity equals Infinity.
*/
console.log(1 / Infinity); //returns 0
console.log(Infinity + 1); //returns Infinity