// ==================================================================== UNARY OPERATOR ====================================================================

// 1. Unary Plus (+):
// Convert a value into a number
var str = "25";
console.log(+str);                  // 25
console.log(typeof (+str));         // number


// 2. Unary Minus (-):
var num = 25;
console.log(-num);                  // -25


// 3. Increment (x++):
// Uses value first, then adds 1
var a = 5;
console.log(a++);                   // 5
console.log(a);                     // 6


// 4. Increment (++x):
// Adds 1 first, then uses value
var a = 5;
console.log(++a);                   // 6
console.log(a);                     // 6


// 5. Decrement (x--):
// Uses value first, then subtract 1
var a = 5;
console.log(a--);                   // 5
console.log(a);                     // 4


// 6. Decrement (--x);
// Subtract 1 first, then uses value
var a = 5;
console.log(--a);                   // 4
console.log(a);                     // 4
