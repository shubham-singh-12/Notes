// ===================================================================== MATH OBJECT =====================================================================


// ========================= Math.round() =========================

// SYNTAX
// Math.round(number);


// EAMPLES
// console.log(Math.round(4.3));                   // 4
// console.log(Math.round(4.5));                   // 5
// console.log(Math.round(4.7));                   // 5

// console.log(Math.round(-4.5));                  // -4
// console.log(Math.round(-4.7));                  // -5


// USE CASE
// let productPrice = 99.49;
// console.log(`Price: ₹${Math.round(productPrice)}`);             // Price: ₹99

// let productPrice2 = 99.75;
// console.log(`Price: ₹${Math.round(productPrice2)}`);            // Price: ₹100





// ========================= Math.floor() =========================

// SYNTAX
// Math.floor(number);


// EXAMPLE
// console.log(Math.floor(4.1));                   // 4
// console.log(Math.floor(4.5));                   // 4
// console.log(Math.floor(4.9));                   // 4

// console.log(Math.floor(-4.1));                  // -5
// console.log(Math.floor(-4.9));                  // -5


// USE CASE
// let items = 17;
// let boxSize = 5;

// let fullBox = Math.floor(items / boxSize);
// console.log(`Full boxes: ${fullBox}`);                  // Full boxes: 3





// ========================= Math.ceil() =========================

// SYNTAX
// Math.ceil(number);


// // EXAMPLE
// console.log(Math.ceil(4.1));                    // 5
// console.log(Math.ceil(4.5));                    // 5
// console.log(Math.ceil(4.9));                    // 5

// console.log(Math.ceil(-4.1));                   // -4
// console.log(Math.ceil(-4.9));                   // -4


// // USE CASE
// let students = 23;
// let perPage = 5;

// let pages = Math.ceil(students / perPage);
// console.log(`Pages needed: ${pages}`);                  // Pages needed: 5





// ========================== Math.abs() ==========================

// // SYNTAX
// Math.abs(number);


// // EXAMPLE
// console.log(Math.abs(5));                   // 5

// console.log(Math.abs(-5));                  // 5
// console.log(Math.abs(-99));                 // 99


// // USE CASE
// let a = 100;
// let b = 150;

// console.log(`Difference: ${Math.abs(a - b)}`);                  // Difference: 50





// ========================== Math.max() ==========================

// // SYNTAX
// Math.max(number_1, number_2, ...number_n);


// // EXAMPLE
// console.log(Math.max(10, 20, 30));                  // 30
// console.log(Math.max(5, 1, 8, 3));                  // 8

// console.log(Math.max(-5, -1, -8));                  // -1


// // USE CASE - With array using spread operator
// let numbers = [10, 20, 30, 40, 50];
// console.log(Math.max(...numbers));                  // 50





// ========================== Math.min() ==========================

// // SYNTAX
// Math.min(number_1, number_2, ...number_n);


// // EXAMPLE
// console.log(Math.min(10, 20, 30));                  // 10
// console.log(Math.min(5, 1, 8, 3));                  // 1

// console.log(Math.min(-5, -1, -8));                  // -8


// // USE CASE - with array using spread operator
// let numbers = [10, 20, 30, 40, 50];
// console.log(Math.min(...numbers));                  // 10





// ========================== Math.pow() ==========================

// // SYNTAX
// Math.pow(x, y);


// // EXAMPLE
// console.log(Math.pow(2, 3));                    // 8    (2*2*2)
// console.log(Math.pow(5, 2));                    // 25   (5*5)
// console.log(Math.pow(10, 3));                   // 1000


// // USE CASE
// let side = 5;
// let area = Math.pow(side, 2);

// console.log(`Area of Square: ${area}`);             // Area of Square: 25





// ========================= Math.sqrt() =========================

// // SYNTAX
// Math.sqrt(number);


// // EXAMPLE
// console.log(Math.sqrt(25));                 // 5
// console.log(Math.sqrt(16));                 // 4
// console.log(Math.sqrt(9));                  // 3

// console.log(Math.sqrt(2));                  // 1.4142135623730951


// // USE CASE
// let area = 144;
// let side = Math.sqrt(area);

// console.log(`Side of Square: ${side}`);                 // Side of Square: 12





// ======================== Math.random() ========================

// // SYNTAX
// Math.random();


// EXAMPLE
// // Random number between 0 to 1
// console.log(Math.random());                 // 0.23006634817631122
// console.log(Math.random());                 // 0.6736925830373649

// // USE CASE
// function randomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(1, 100));
// console.log(randomBetween(50, 200));





// ========================= Math.trunc() =========================

// // SYNTAX
// Math.trunc(decimal_number);

// // EXAMPLE
// console.log(Math.trunc(4.9));                   // 4
// console.log(Math.trunc(4.1));                   // 4

// console.log(Math.trunc(-4.9));                  // -4
// console.log(Math.trunc(-4.1));                  // -4





// ========================= Math.sign() =========================

// // SYNTAX
// Math.sign(number_with_sign);


// // EXAMPLE
// console.log(Math.sign(10));                 // 1
// console.log(Math.sign(-10));                // -1
// console.log(Math.sign(0));                  // 0





// ======================== Math Constants ========================

// // PI
// console.log(Math.PI);                   // 3.141592653589793

// // Eular's number
// console.log(Math.E);                    // 2.718281828459045

// // √2
// console.log(Math.SQRT2);                // 1.4142135623730951


// // USE CASE
// let radius = 7;
// let area = Math.PI * Math.pow(radius, 2);

// console.log(`Circle area: ${area.toFixed(2)}`);                 // Circle area: 153.94