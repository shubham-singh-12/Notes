// ===================================================================== FOREACH METHOD =====================================================================


// SYNTAX

// Using Normal Function
// array.forEach (function callback (currentValue, index, arr){
//     // Code to Executed
// }, thisValue);

// Using Arrow Function
// array.forEach ((currentValue, index, arr) => {
//     // Code to Executed
// }, thisValue);

// array            => The array we want to loop.
// forEach          => The method to loop each element.

// function         => A function to run each array element (Required).
// callback         => The function that runs on each element.

// currentValue     => The value of the current element (Required).
// index            => The index of the current element (Optional).
// arr              => The array of the current element (Optional).
// thisValue        => A value passed to the function as its "this" value (Optional)(Default: undefined)





// ================================================================
// // With currentValue only (Using Normal Function)
// let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });


// OUTPUT:
// Apple
// Banana
// Orange
// Grapes




// // With currentValue only (Using Arrow Function)
// let fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

// // OUTPUT:
// // Apple
// // Mango
// // Banana
// // Grapes
// // Orange





// ================================================================
// // With currentValue & index (Using Normal Function)

// let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// fruits.forEach(function (fruit, index) {
//     console.log(`${fruit} : ${index}`);
// });


// OUTPUT:
// Apple : 0
// Banana : 1
// Orange : 2
// Grapes : 3



// // With currentValue & Index (Using Arrow Function)
// let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// fruits.forEach((fruit, index) => {
//     console.log(`${fruit}: ${index}`);
// });


// // OUTPUT:
// // Apple: 0
// // Banana: 1
// // Orange: 2
// // Grapes: 3





// ================================================================
// // With currentValue, index & array (Using Normal Function)

// let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// fruits.forEach(function (fruit, index, arr) {
//     console.log(`${fruit}: ${index} => Full array is [${arr}]`);
// });



// // OUTPUT:

// // Apple: 0 => Full array is [Apple,Banana,Orange,Grapes]
// // Banana: 1 => Full array is [Apple,Banana,Orange,Grapes]
// // Orange: 2 => Full array is [Apple,Banana,Orange,Grapes]
// // Grapes: 3 => Full array is [Apple,Banana,Orange,Grapes]




// // With currentValue, index & array (Using Arrow Function)
// let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// fruits.forEach((fruit, index, array) => {
//     console.log(`${fruit}: ${index} => [${array}]`);
// });


// // OUTPUT:
// // Apple: 0 => [Apple,Banana,Orange,Grapes]
// // Banana: 1 => [Apple,Banana,Orange,Grapes]
// // Orange: 2 => [Apple,Banana,Orange,Grapes]
// // Grapes: 3 => [Apple,Banana,Orange,Grapes]