// ================================================================== LOGICAL OPERATORS ===================================================================

// 1. Logical AND (&&):
// The && operator returns true if both expressions are true, otherwise false
var x = 5;
var y = 10;
console.log(x > 0 && y > 0);                // true

var x = 5;
var y = 10;
console.log(x > 0 && y < 0);                // false

var x = 5;
var y = 10;
console.log(x < 0 && y > 0);                // false

var x = 5;
var y = 10;
console.log(x < 0 && y < 0);                // false


// 2. Logical OR (||):
// Returns true if at least one of the operands is true, otherwise, it returns false.
var a = 5;
var b = 0;
console.log(a > 0 || b > 10);               // true

var a = 5;
var b = 0;
console.log(a > 0 || b < 10);               // true

var a = 5;
var b = 0;
console.log(a < 0 || b > 10);               // false

var a = 5;
var b = 0;
console.log(a < 0 || b < 10);               // true


// 3. Logical NOT (!):
// Returns true if the operand is false, and false if the operand is true.
var isOpen = false;
console.log(!isOpen);                       // true

var isOpen = true;
console.log(!isOpen);                       // false