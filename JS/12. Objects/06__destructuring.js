// ==================================================================== DESTRUCTURING ====================================================================


// ==================== 1. Basic Destructuring ====================
// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi",
// };



// // OLD WAY ❌
// let name = user.name;
// let age = user.age;

// console.log(name);                  // Alice
// console.log(age);                   // 25


// // NEW WAY ✅
// let { name, age } = user;
// console.log(name);                  // Alice
// console.log(age);                   // 25





// ================================================================
// ================ 2. Rename while Destructuring =================

// let user = {
//     name: "Alice",
//     age: 25,
//     city: "Delhi",
// };

// let { name: userName, age: userAge } = user;

// console.log(userName);                  // Alice
// console.log(userAge);                   // 25





// ================================================================
// ============= 3. Default Value while Destructuring =============

// let user = {
//     name: "Alice",
// };

// let { name, role = "User" } = user;

// console.log(name);                  // Alice
// console.log(role);                  // User ✅ (role didn't exist, used default)





// ================================================================
// =================== 4. Nested Destructuring ====================

// let user = {
//     name: "Alice",
//     address: {
//         city: "Delhi",
//         zip: "110001",
//     },
// };

// let { name, address: { city } } = user;

// console.log(name);                  // Alice
// console.log(city);                  // Delhi