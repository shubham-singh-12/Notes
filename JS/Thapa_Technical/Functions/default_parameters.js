// ================================================================== DEFAULT PARAMETERS ==================================================================


// SYNTAX
// function functionName(param = defaultValue) {
//     // Code to executed
// }





// =============================================================== PROBLEMS BEFORE & AFTER ==================================================================

// Without Default Parameters
function greet(name) {
    console.log(`Hello ${name}.`);
};

greet("Shubham");                   // Hello Shubham
greet();                            // Hello undefined.


// With Default Parameters
function greet(name = "Guest") {
    console.log(`Hello ${name}!`);
};

greet("Shubham");                   // Hello Shubham!
greet();                            // Hello Guest!





// ======================================================================= EXAMPLES =======================================================================

// 1. Number Default

function multiply(a, b = 2) {
    return a * b;
};

console.log(multiply(5, 3));                    // 15
console.log(multiply(5));                       // 10



// 2. Multiple Default Parameters

function userInfo(userName = "Guest", userAge = 18, userCity = "Delhi") {
    console.log(`Name: ${userName}, Age: ${userAge}, City: ${userCity}`);
};

userInfo("Shubham", 25, "Meerut");          // Name: Shubham, Age: 25, City: Meerut
userInfo("Bob");                            // Name: Bob, Age: 18, City: Delhi
userInfo();                                 // Name: Guest, Age: 18, City: Delhi



// 3. Some Values passed, Some not

function orderFood(food = "Burger", qty = 1) {
    console.log(`You ordered: ${qty} ${food}.`);
};

orderFood("Pizza", 3);          // You ordered: 3 Pizza.
orderFood("Pizza");             // You ordered: 1 Pizza.
orderFood();                    // You ordered: 1 Burger.



// 4. Passing undefined also triggers default

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
};

greet(undefined);               // Hello Guest
greet(null);                    // Hello null



// 5. With Arrow Function

var greet = (name = "Guest") => {
    console.log(`Hello ${name}!`);
};

greet("Shubham");                   // Hello Shubham!
greet();                            // Hello Guest!