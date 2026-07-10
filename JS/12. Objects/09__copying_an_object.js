// ================================================================== COPYING AN OBJECT ==================================================================


// // 1. Shallow Copy -- spread operator ✅

// let original = {
//     name: "Alice",
//     age: 25,
//     address: {
//         city: "Delhi",
//     }
// };

// let copy = { ...original };
// copy.age = 30;

// console.log(original.age);                  // 25
// console.log(copy.age);                      // 30


// copy.address.city = "Mumbai",
// console.log(original.address.city);         // Mumbai (instead of Delhi ❌)
// console.log(copy.address.city);             // Mumbai





// ================================================================
// // 2. Deep Copy -- structuredClone()  ✅ Modern Way

// let original = {
//     name: "Alice",
//     age: 25,
//     address: {
//         city: "Delhi",
//     }
// };

// let deepCopy = structuredClone(original);
// deepCopy.address.city = "Mumbai";

// console.log(original.address.city);                 // "Delhi"  ✅ original is safe!
// console.log(deepCopy.address.city);                 // "Mumbai"





// ================================================================
// // Limitations of structuredClone()

// let original = {
//     name: "Alice",
//     greet: function () {
//         console.log("Hi !!!");
//     }
// };

// let copy = structuredClone(original);

// console.log(copy);                  // ❌ DataCloneError — functions cannot be cloned