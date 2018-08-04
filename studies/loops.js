/* 
LOOOPS

While loops
The while loop loops through a block of code
as long as a specified condition is true.

Ex. 

i = 0;
while(i < 10) {
  console.log(i);
  i++;
}

 3 steps to defining a for loop

--> For Loops
 loops through a block of code a number of times

Where to start ?
Intialize

How long should I loop for ?
Condition
 
What will i do each time i loop ?
 Increment


       //1        //2        //3
for (var i = 0; index < 5; i++) {
     code to run multiple times  
}

var arr = [21, true, 13, 55];
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]); loops forward over array
}

for (var i = arr.length - 1; i > -1; i--){
    console.log(arr[i]); loops backwards over array
}

For In loops
2 steps to define for in loop

What is a for in loop ?
a loop that iterates over the properties in an object.
WHat ever code is passed into the for in loop , it will run on each key

How will you refer to keys?
Dot Syntax and Bracket Notation 

obj.lastName = "Melvin";
obj["firstname"] = "Miller";



for (var key in object){
    //code to run multiple times
}


--> To get value from objects

var obj = {
    firstName: "Melvin";
    lastName: "Miller";
};

for (var key in obj) {
    console.log(obj[key]); prints the value
}

var obj = {
    firstName: "Melvin";
    lastName: "Miller";
};

for (var key in obj) {
    console.log(obj); prints the keys
}

*/
