// ====================================================================== MAP METHOD ======================================================================


// SYNTAX
// array.map(function (currentValue, index, arr) {
//     // Code to Executed
//     return newValue;
// }, thisValue);


// array => The array we want to loop
// map => The method that loops & returns new array.
// function => A function to be run for each array element (REQUIRED).

// currentValue => The value of the current element (REQUIRED).
// index => The index of the current element (OPTIONAL).
// arr => The array of the current element (OPTIONAL).

// thisValue => Value to use as this inside callback (OPTIONAL).
// return => Must return a value to build new array.





// ================================================================
// // Only CurrentValue (Using Normal Function)
// let numbers = [1, 2, 3, 4, 5];

// var double = numbers.map(function (currentValue) {
//     return currentValue * 2;
// });

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(double);                    // [ 2, 4, 6, 8, 10 ]



// // Only CurrentValue (Using Arrow Function)
// let numbers = [1, 2, 3, 4, 5];

// var double = numbers.map((currentValue) => {
//     return currentValue * 2;
// });

// console.log(numbers);                   // [ 1, 2, 3, 4, 5 ]
// console.log(double);                    // [ 2, 4, 6, 8, 10 ]


// ================================================================
// // Only CurrentValue + Index (Using Normal Function)
// let fruits = ["Apple", "Banana", "Mango", "Grapes"];

// var result = fruits.map(function(currentValue, index) {
//     return `${index}: ${currentValue}`;
// });

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]
// console.log(result);                    // [ '0: Apple', '1: Banana', '2: Mango', '3: Grapes' ]



// // Only CurrentValue + Index (Using Arrow Function)
// let fruits = ["Apple", "Banana", "Mango", "Grapes"];

// var result = fruits.map((currentValue, index) => {
//     return `${index}: ${currentValue}`;
// });

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]
// console.log(result);                    // [ '0: Apple', '1: Banana', '2: Mango', '3: Grapes' ]





// ================================================================
// // Only CurrentValue, Index, Array (Using Normal Function)
// let fruits = ["Apple", "Mango", "Banana", "Grapes"];

// let result = fruits.map(function (currentValue, index, arr) {
//     return `${index}: ${currentValue} ==> [${arr}]`;
// });

// console.log(fruits);                    // [ 'Apple', 'Mango', 'Banana', 'Grapes' ]

// console.log(result);
// /* [
//   '0: Apple ==> [Apple,Mango,Banana,Grapes]',
//   '1: Mango ==> [Apple,Mango,Banana,Grapes]',
//   '2: Banana ==> [Apple,Mango,Banana,Grapes]',
//   '3: Grapes ==> [Apple,Mango,Banana,Grapes]'
// ] */



// // Only CurrentValue, Index, Array (Using Arrow Function)
// let fruits = ["Apple", "Mango", "Banana", "Grapes"];

// let result = fruits.map((currentValue, index, arr) => {
//     return `${index}: ${currentValue} ==> [${arr}]`;
// });

// console.log(fruits);                    // [ 'Apple', 'Mango', 'Banana', 'Grapes' ]

// console.log(result);
// /* 
// [
//   '0: Apple ==> [Apple,Mango,Banana,Grapes]',
//   '1: Mango ==> [Apple,Mango,Banana,Grapes]',
//   '2: Banana ==> [Apple,Mango,Banana,Grapes]',
//   '3: Grapes ==> [Apple,Mango,Banana,Grapes]'
// ]
// */