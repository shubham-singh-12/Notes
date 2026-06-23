// ================================================================== TEMPLATE LITERALS ==================================================================


// SYNTAX
// `Hello ${variableName}`





// ================================================================== Old way VS New way ==================================================================

// 1. Old Way - Using +
var name = "Shubham";
var age = 24;

console.log("My name is " + name + " and I am " + age + " years old.");
// My name is Shubham and I am 24 years old.



// 2. New Way - Using Template Literals
var name = "Shubham";
var age = 25;

console.log(`My name is ${name} amd I am ${age} years old.`);
// My name is Shubham amd I am 25 years old.





// ================================================================= STRING INTERPOLATION =================================================================
var firstName = "Shubham";
var lastName = "Singh";
console.log(`Hello, ${firstName} ${lastName}.`);
// Hello, Shubham Singh.





// ======================================================================= EXAMPLES =======================================================================

// 1. Basic Variable
var name = "Shubham";
console.log(`Hello ${name}.`);              // Hello Shubham.


// 2. Multiple Variables
var name = "Shubham";
var age = 24;
console.log(`My name is ${name}, I am {age} years old.`);
// My name is Shubham, I am 24 years old.


// 3. Math Expression inside ${}
var a = 5;
var b = 3;
console.log(`Sum of ${a} & ${b}: ${a + b}.`);
// Sum of 5 & 3: 8.


// 4. Multi-line String

// Old way ❌ - MESSY
var msg = "Hello Everyone!\nWelcome to JavaScript.\nHave fun!";
console.log(msg);
/* Hello Everyone!
Welcome to JavaScript.
Have fun! */

// New Way ✅ - CLEAN
var msg = `Hello Everyone!
Welcome to JavaScript.
Have Fun!`
console.log(msg);
/* Hello Everyone!
Welcome to JavaScript.
Have Fun! */


// 5. Condition Inside ${}
var age = 20;
console.log(`You are ${age >= 18 ? "Adult" : "Minor"}`);
// You are Adult