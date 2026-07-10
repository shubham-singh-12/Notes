// ========================================================================================================================================================
// ================================================================== TYPES OF FUNCTIONS ==================================================================
// ========================================================================================================================================================


// ====================================================== 1. Function Declaration (Normal Function) =======================================================
// ============================ SYNTAX ============================
// function functionName() {
//     // Code to be executed
// }

// // Calling a function
// functionName();


// =========================== EXAMPLE ============================

// // Calling before defining
// greet();                        // Hello Everyone

// function greet() {
//     console.log("Hello Everyone!!!");
// }

// // Calling after defining
// greet();                        // Hello Everyone





// ========================================================================================================================================================
// ================================================================ 2. Function Expression ================================================================
// ============================ SYNTAX ============================
// var variableName = function functionName(parameters) {
//     // Code to be executed
// }

// variableName(arguments);


// =========================== EXAMPLE ============================
// var result = function sum(a, b) {
//     console.log(a + b);                 // 25
// }

// result(10, 15);


// =========================== EXAMPLE ============================
// var greet = function (name) {
//     return ("Hello " + name + "!!!")
// }

// console.log(greet("Shubham"));                  // Hello Shubham!!!





// ========================================================================================================================================================
// ================================================================== 3. Arrow Function ===================================================================

// ============================ SYNTAX ============================
// var functionName = () => {
//     // Code to be executed
// };

// // Calling function
// functionName();



// =========================== EXAMPLE ============================
// var greet = () => {
//     console.log("Hello Everyone!");
// };

// greet();                    // Hello Everyone


// =================== Example (With Parameter) ===================
// var add = (a, b) => {
//     return a + b;
// };

// console.log(add(5, 3));                  // 8


// ================ Example (One line - Shortcut) =================
// var add = (a, b) => a + b;              // No return & curly braces needed

// console.log(add(5, 3));                 // 8


// =========== Example (Single Parameter - No brackets) ===========
// var greet = name => console.log("Hello " + name);

// greet("Shubham");                   // Hello Shubham





// ========================================================================================================================================================
// ================================================================ 4. Anonymous Function =================================================================

// ============================ SYNTAX ============================
// function() {
//     // Code to be executed
// }


// =========================== EXAMPLE ============================
// var greet = function () {
//     console.log("Hello Everyone!");
// };

// greet();                    // Hello Everyone!


// ===================== EXAMPLE (setTimeout) =====================
// setTimeout(function () {
//     console.log("Runs after 2 seconds!");
// }, 2000);





// ========================================================================================================================================================
// ================================================== 5. IIFE (Immediately Invoked Function Expression) ===================================================

// ============================ SYNTAX ============================
// (function () {
//     // Code to be Executed
// })();


// =========================== EXAMPLE ============================
// (function () {
//     console.log("I run immediately!");                  // I run immediately!
// })();


// ================== EXAMPLE (With Parameters) ===================
// (function (name) {
//     console.log("Hello " + name);                   // Hello Shubham
// })("Shubham");


// ================ EXAMPLE (Arrow function IIFE) =================
// (() => {
//     console.log("Arrow IIFE runs immediately!");        //Arrow IIFE runs immediately!
// })();





// ========================================================================================================================================================
// =========================================================== Declaration / Expression / Arrow ===========================================================

// Function Declaration - Hoisted, call before defining works
// greet();

// function greet() {
//     console.log("Hello");
// }


// ================================================================
// Function Expression - Not hoisted
// greet();                    // Error!

// var greet = function () {
//     console.log("Hello!");
// };


// ================================================================
// greet();                    // Error

// var greet = () => {
//     console.log("Hello!");
// };






// ==================================================================== QUICK SUMMARY =====================================================================

// 1. Function Declaration
function greet() {
    // Code to Executed
};

greet();


// ================================================================
// 2. Function Expression
var greet = function () {
    // Code to Executed
};

greet();


// ================================================================
// 3. Arrow Function
var greet = () => {
    // Code to Executed
};

var add = (a, b) => a + b;


// ================================================================
// 4. Anonymous Function
var greet = function () {
    // Code to Executed
};

setTimeout(function () {
    // Code to Executed
}, /* time in Seconds */);


// ================================================================
// IIFE
(function () {
    // Code to Executed
})();

(() => {
    // Code to Executed
})();