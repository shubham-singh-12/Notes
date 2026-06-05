// ===================================================================== FIND METHOD =====================================================================

// let names = ["raja", "deepak", "aman", "virat"];

// let result = names.find((elem) => {
//     return elem == "virat";
// });

// console.log(result);                    // virat





// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.find(function (num) {
//     return num > 25;
// });

// console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]
// console.log(result);                    // 30





// let fruits = ["Apple", "Banana", "Mango", "Grapes"];

// var result = fruits.find(function(fruit) {
//     return fruit.startsWith("B");
// });

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]
// console.log(result)                     // Banana





// =================================================================== FINDINDEX METHOD ===================================================================

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.findIndex(function(num) {
//     return num > 25;
// });

// console.log(result);                    // 2 (Index of 30, first number greater than 25)





let names = ["Aman", "Bijoy", "Chandu", "Deep"];

let result = names.findIndex((elem) => {
    return elem.includes("a");
});

console.log(result);                    // 0 (Index of Aman)