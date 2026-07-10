// ==================================================================== FILTER METHOD ====================================================================


// SYNTAX
// array.filter(function callback(currentValue, index, arr) {
//     // Code to Executed
//     return condition;           // true == Keep, false == Remove
// }, thisValue);


// array        =>  the array you want to loop
// filter       => the method that filters & returns new array

// function     => A function to run for each array element. (REQUIRED).
// callback     => the function that runs on each element

// currentValue => The value of the current element (REQUIRED).
// index        => The index of the current element (OPTIONAL).
// arr          => The array of the current element (OPTIONAL).





// ================================================================
// // Only CurrentValue (Using Normal Function)
// let number = [1, 2, 3, 4, 5, 6];

// let evenNumber = number.filter(function (currentValue) {
//     return currentValue % 2 == 0;
// });

// console.log(number);                    // [ 1, 2, 3, 4, 5, 6 ]
// console.log(evenNumber);                // [ 2, 4, 6 ]



// // Only CurrentValue (Using Arrow Function)
// let number = [1, 2, 3, 4, 5, 6];

// let evenNumber = number.filter((currentValue) => {
//     return currentValue % 2 == 0;
// });

// console.log(number);                    // [ 1, 2, 3, 4, 5, 6 ]
// console.log(evenNumber);                // [ 2, 4, 6 ]





// ================================================================
// // Only CurrentValue, Index (Using Normal Function)
// let fruits = ["Apple", "Banana", "Mango", "Grapes"];

// let result = fruits.filter(function (currentValue, index) {
//     console.log(`${index}: ${currentValue}`);
//     return currentValue.length > 5;
// });

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]
// console.log(result);                    // [ 'Banana', 'Grapes' ]



// // Only CurrentValue, Index (Using Arrow Function)
// let fruits = ["Apple", "Banana", "Mango", "Grapes"];

// let result = fruits.filter((currentValue, index) => {
//     console.log(`${index}: ${currentValue}`);
//     return currentValue.length > 5;
// });

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]
// console.log(result);                    // [ 'Banana', 'Grapes' ]





// ================================================================
// // Only currentValue, index, arr (Using Normal Function)
// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.filter(function (currentValue, index, arr) {
//     console.log(`${index}: ${currentValue} in [${arr}]`);

//     return currentValue >= 30;
// })

// console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]
// console.log(result);                    // [ 30, 40, 50 ]



// // Only currentValue, index, arr (Using Arrow Function)
// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.filter((currentValue, index, arr) => {
//     console.log(`${index}: ${currentValue} in [${arr}]`);

//     return currentValue >= 30;
// });

// console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]
// console.log(result);                    // [ 30, 40, 50 ]