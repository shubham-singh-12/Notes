// ===================================================================== EVERY METHOD =====================================================================


// let numbers = [2, 4, 6, 8, 12];

// let result = numbers.every((elem) => {
//     return elem % 2 == 0;
// });

// console.log(result);                    // true





let numbers = [2, 4, 6, 8, 9];

let result = numbers.every((elem) => {
    return elem % 2 == 0;
});

console.log(result);                    // false (because of 9)