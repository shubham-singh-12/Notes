// ===== ReferenceError — using a variable that doesn't exist =====
try {
  console.log(notDefined);
} catch (e) {
  console.log(e.name);                  // "ReferenceError"
}


// ================================================================
// TypeError — using a value in a way its type doesn't allow
try {
  let num = 5;
  num();                    // numbers aren't functions!
} catch (e) {
  console.log(e.name);      // "TypeError"
}


// ================================================================
// SyntaxError — invalid code (usually caught before running, hard to try/catch)
try {
  eval("let x = ;");                // invalid syntax
} catch (e) {
  console.log(e.name);              // "SyntaxError"
}


// ================================================================
// RangeError — number outside allowed range
try {
  let arr = new Array(-1);              // invalid array length
} catch (e) {
  console.log(e.name);                  // "RangeError"
}