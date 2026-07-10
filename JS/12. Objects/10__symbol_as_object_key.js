// ================================================================= SYMBOL AS OBJECT KEY =================================================================

// let secretId = Symbol("userId");

// let user = {
//     name: "Alice",
//     [secretId]: "xyz-987"                   // Symbol as Key ✅
// };

// console.log(user[secretId]);                // xyz-987
// console.log(user["secretId"]);              // undefined ❌ (only accessible via symbol)





// ================================================================
// // Symbols are hidden from loops

// let secretId = Symbol("userId");

// let user = {
//     name: "Alice",
//     [secretId]: "xyz-987",
// };

// for (let key in user) {
//     console.log(key);                   // name     -> symbol is hidden ✅
// };

// console.log(Object.keys(user));         // [ 'name' ]   -> symbol not included ✅