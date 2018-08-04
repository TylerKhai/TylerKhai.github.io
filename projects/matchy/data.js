/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "ewok";
animal['name'] = 'Tony';
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises['skreetch'];
noises.push("whimpers");
noises.unshift("purs");
noises[noises.length]= "jibberish";
noises.push("sobs");

console.log(noises.length);
console.log(noises[3]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises']=noises;
noises.push("yawns");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // we can acces propoperties in an object by using the dot.notation or bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * // we acces the elements in an array by reffering to its index number([0])
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var dog = {
    species: "dog",
    name: 'Honey',
    noises: ['bark', "whines", "snores"]
};
animals.push(dog);

var wookie = {
    species: 'wookie',
    name: 'Greg',
    noises: ['loud screams', 'soft screams', "hight pitch screams"]
};
animals.push(wookie);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];

function getRandom(animals) {
   //create variable called index and set equal to Math.random example
   var index = Math.floor(Math.random() * animals.length);
   //return index
   return index;
}
//using a random index from this function
var index = getRandom(animals);
friends.push(animals[index].name);
console.log(friends);
wookie.friends=friends;
console.log(wookie);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
