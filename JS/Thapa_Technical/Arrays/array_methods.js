// ==================================================================== ARRAY METHODS ====================================================================


// ============================ push() ============================
// let fruits = ["Apple", "Banana"];
// fruits.push("Mango");

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango' ]





// ============================ pop() =============================
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango' ]

// fruits.pop();
// console.log(fruits);                    // [ 'Apple', 'Banana' ]





// ========================== unshift() ===========================
// let fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango' ]





// =========================== shift() ============================
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango' ]

// fruits.shift();
// console.log(fruits);                    // [ 'Banana', 'Mango' ]





// ========================== splice() ===========================

// // Remove Items
// let fruits = ["Apple", "Banana", "Mango", "Grapes"];
// let removed_fruit = fruits.splice(1, 2);

// console.log(fruits);                    // [ 'Apple', 'Grapes' ]
// console.log(removed_fruit);             // [ 'Banana', 'Mango' ]


// // Add items
// let fruits = ["Apple", "Grapes"];
// fruits.splice(1, 0, "Banana", "Mango");     // at index 1, remove 0, add items

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]


// // Replace items
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(1, 1, "Grapes");                  // at index 1, remove 1, add "Grapes"

// console.log(fruits);                    // [ 'Apple', 'Grapes', 'Mango' ]





// ========================== reverse() ===========================
// let fruits = ["Apple", "Banana", "Mango"];

// fruits.reverse();

// console.log(fruits);                    // [ 'Mango', 'Banana', 'Apple' ]





// =========================== sort() ============================

// Sort Strings
// let fruits = ["Mango", "Apple", "Banana"];

// fruits.sort();

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango' ]



// // Sort Numbers
// let numbers = [30, 5, 100, 20];

// numbers.sort(function (a, b) {
//     return a - b;
// });

// console.log(numbers);                   // [ 5, 20, 30, 100 ]





// =========================== slice() ============================
// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
// let sliced_fruits = fruits.slice(1, 3);

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Grapes', 'Orange' ]
// console.log(sliced_fruits);             // [ 'Banana', 'Mango' ]






// ========================== concat() ===========================
// let fruits = ["Apple", "Banana"];
// let veggies = ["Carrot", "Potato"];

// let combined = fruits.concat(veggies);

// console.log(fruits);                    // [ 'Apple', 'Banana' ]
// console.log(veggies);                   // [ 'Carrot', 'Potato' ]

// console.log(combined);                  // [ 'Apple', 'Banana', 'Carrot', 'Potato' ]



// // Join 2 Arrays
// let a = [1, 2];
// let b = [3, 4];
// let c = [5, 6];

// let result = a.concat(b, c);

// console.log(a);                 // [ 1, 2 ]
// console.log(b);                 // [ 3, 4 ]
// console.log(c);                 // [ 5, 6 ]

// console.log(result);            // [ 1, 2, 3, 4, 5, 6 ]





// =========================== join() ============================
// let fruits = ["Apple", "Banana", "Mango"];

// let result = fruits.join(", ");
// console.log(result);                    // Apple, Banana, Mango

// let result_2 = fruits.join(" - ");
// console.log(result_2);                  // Apple - Banana - Mango

// let result_3 = fruits.join("");
// console.log(result_3);                  // AppleBananaMango





// ========================= toString() ==========================
// let fruits = ["Apple", "Banana", "Mango"];

// let result = fruits.toString();

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango' ]
// console.log(result);                    // Apple,Banana,Mango





// ========================= includes() ==========================
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits.includes("Banana"));                 // true
// console.log(fruits.includes("Grapes"));                 // false





// ========================== indexOf() ===========================
// let fruits = ["Apple", "Banana", "Mango", "Banana"];

// console.log(fruits.indexOf("Banana"));                  // 1
// console.log(fruits.indexOf("Grapes"));                  // -1





// ======================== lastIndexOf() ========================
// let fruits = ["Apple", "Banana", "Mango", "Banana", "Grapes"];

// let result = fruits.lastIndexOf("Banana");

// console.log(fruits);                    // [ 'Apple', 'Banana', 'Mango', 'Banana', 'Grapes' ]
// console.log(result);                    // 3


// // Item not found
// let fruits = ["Apple", "Banana", "Mango"];

// let result = fruits.lastIndexOf("Grapes");

// console.log(result);                    // -1





// =========================== flat() ============================
// let nested = [1, 2, [3, 4], [5, 6]];

// var result = nested.flat();

// console.log(nested);                    // [ 1, 2, [ 3, 4 ], [ 5, 6 ] ]
// console.log(result);                    // [ 1, 2, 3, 4, 5, 6 ]



// // Deeply Nested Array
// let nested = [1, [2, [3, [4]]]];

// let result = nested.flat(Infinity);

// console.log(nested);                    // [ 1, [ 2, [ 3, [Array] ] ] ]
// console.log(result);                    // [ 1, 2, 3, 4 ]