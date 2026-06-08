// ==================================================================== REDUCE METHOD ====================================================================


// SYNTAX
// array.reduce(function callback(accumulator, currentValue, index, arr) {
//     // Code to Executed
//     return accumulator;
// }, initialValue);


// accumulator      => Stores the running total (result so far).
// currentValue     => Current element of the array (REQUIRED).
// index            => Position of current element (OPTIONAL).
// arr              => The array the current element belongs to (OPTIONAL).

// return           => must return accumulator every time.

// initialValue     => starting value of accumulator (REQUIRED).





// ================================================================
// // Only accumulator & currentValue (Using Normal Function)
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(sum);                       // 15



// // Only accumulator & currentValue (Using Arrow Function)
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(sum);                       // 15





// ================================================================
// // With accumulator, currentValue, index (Using Normal Function)
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function (accumulator, currentValue, index) {
//     console.log(`Step ${index} -> acc: ${accumulator} + curr: ${currentValue} => ${accumulator + currentValue}`);
//     return accumulator + currentValue;
// }, 0);

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(sum);                       // 15

// // Step 0 -> acc: 0 + curr: 1 => 1
// // Step 1 -> acc: 1 + curr: 2 => 3
// // Step 2 -> acc: 3 + curr: 3 => 6
// // Step 3 -> acc: 6 + curr: 4 => 10
// // Step 4 -> acc: 10 + curr: 5 => 15



// // With accumulator, currentValue, index (Using Arrow Function)
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator, currentValue, index) => {
//     console.log(`Step ${index} -> acc: ${accumulator} + curr: ${currentValue} => ${accumulator + currentValue}`);
//     return accumulator + currentValue;
// }, 0);

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(sum);                       // 15

// // Step 0 -> acc: 0 + curr: 1 => 1
// // Step 1 -> acc: 1 + curr: 2 => 3
// // Step 2 -> acc: 3 + curr: 3 => 6
// // Step 3 -> acc: 6 + curr: 4 => 10
// // Step 4 -> acc: 10 + curr: 5 => 15





// ================================================================
// // With accumulator, currentValue, index & arr (Using Normal Function)
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function (accumulator, currentValue, index, arr) {
//     console.log(`Array: [${arr}]`);
//     return accumulator + currentValue;
// }, 0);

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(sum);                       // 15

// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]



// // With accumulator, currentValue, index & arr (Using Arrow Function)
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator, currentValue, index, arr) => {
//     console.log(`Array: [${arr}]`);
//     return accumulator + currentValue;
// }, 0);

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(sum);                       // 15

// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]
// // Array: [1,2,3,4,5]