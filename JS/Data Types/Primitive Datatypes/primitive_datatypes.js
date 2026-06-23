// ================================================================= PRIMITIVE DATATYPES =================================================================


// ============================ Number ============================
// It represents numeric values, including itegers & floating-point numbers.

var myNum = 2;
console.log(myNum);                  // 2

var myNum2 = -2;
console.log(myNum2);                 // -2

var weight = 7.5;
console.log(weight);                 // 7.5





// ============================ STRING ============================
// It represents a sequence of characters enclosed in single or double quotes.

let color = "Red";
console.log(color);                 // Red

let lastName = 'Singh';
console.log(lastName);              // Singh





// =========================== BOOLEAN ============================
// It represents a logical entity with 2 values: true OR false.

let areYouAwesome = true;
console.log(areYouAwesome);                 // true

let isRaining = false;
console.log(isRaining);                     // false





// ========================== UNDEFINED ===========================
// It represents the absence of a value or an uninitialized variable.

var userName;
console.log(userName);                 // undefined

let userAge;
console.log(userAge);                 // undefined





// ============================= NULL =============================
// It represents the absence of a value.
// It is often used to explicitly indicated that a variable or object property has no assigned value.

var badMemories = null;
console.log(badMemories);                   // null





// ============================ BIGINT ============================
// It represents a large integer.
// It represents integers of arbitrary precision (available since ECMAScript 2020)

const bigNumber = 12456789012345678901234567890n;
console.log(bigNumber);                 // 12456789012345678901234567890n





// ============================ SYMBOL ============================
// It represents a unique and immutable data type, often used to create unique identifiers.

var s1 = Symbol("Geeks");
console.log(s1)                 // Symbol(Geeks)