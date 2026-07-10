// ================================================================== let / var / const ==================================================================



// ================================================================

// 1. var

// SYNTAX
// var variableName = value;



// EXAMPLES

// Declared variable
// var name = "Shubham";
// console.log(name);                  // Shubham

// Can be re-declared
// var name = "Bob";
// console.log(name);                  // Bob

// can be updated
// name = "Charlie";
// console.log(name);                  // Charlie


// Hoisting with var
// console.log(name);                  // undefined (not error, because hoisted)
// var name = "Alice";





// ================================================================

// 2. let

// SYNTAX
// let variableName = value;


// EXAMPLES

// Declared Variable
// let name = "Shubham";
// console.log(name);                  // Shubham

// Cannot be re-declared
// let name = "Bob";
// console.log(name);                  // SyntaxError: Identifier 'name' has already been declared

// Can be updated
// name = "Charlie";
// console.log(name);                  // Charlie


// Hoisting with let
// console.log(name);                  // SyntaxError: Identifier 'name' has already been declared
// let name = "Alice";





// ================================================================

// 3. const

// SYNTAX
const variableName = value;


// EXAMPLES

// Declared Variable
const name = "Shubham";
console.log(name);                  // Shubham

// Cannot be re-declared
const name = "Bob";         // SyntaxError: Identifier 'name' has already been declared

// Cannot be updated
name = "Charlie";           // SyntaxError: Identifier 'name' has already been declared


const UserName;             // SyntaxError: Missing initializer in const declaration

const name = "Alice";