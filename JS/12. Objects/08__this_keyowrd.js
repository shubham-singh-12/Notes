// ===================================================================== this KEYWORD =====================================================================


// let user = {
//     name: "Alice",
//     age: 25,
//     greet: function () {

//         // Not Prefered❌
//         console.log(`Hello, my name is ${user.name}.`);
//     }
// };

// user.greet();                   // Hello, my name is Alice.





// ================================================================
// let user = {
//     name: "Alice",
//     age: 25,
//     greet: function () {

//         // Prefered ✅
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// user.greet();                   // Hello, my name is Alice