// ================================================================ LOOPING OVER AN OBJECT ===============================================================

// // 1. for...in Loop (Old Way)

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi",
// };

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
// };


// /*
// name: Alice
// age: 25
// city: Delhi
// */





// ================================================================
// // 2. Object.keys() -> Get all Keys

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi",
// };

// console.log(Object.keys(user));                 // [ 'name', 'age', 'city' ]


// for (let key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// };

// /*
// name: Alice
// age: 25
// city: Delhi
// */





// ================================================================
// // 3. Object.values() -> Get all values

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi",
// };

// console.log(Object.values(user));           // [ 'Alice', 25, 'Delhi' ]


// for (let value of Object.values(user)) {
//     console.log(value);
// };

// /*
// Alice
// 25
// Delhi
// */





// ================================================================
// // 4. Object.entries() -> Get keys & values (Best Way)

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi",
// };

// console.log(Object.entries(user));
// // [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'city', 'Delhi' ] ]


// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// };

// /*
// name: Alice
// age: 25
// city: Delhi
// */