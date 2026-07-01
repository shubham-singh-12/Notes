// ============================================================ STORING OBJECT IN localStorage ============================================================

// ================== Wrong way to store Object ===================
// let user = {
//   name: "Shubham",
//   age: 25,
//   city: "Delhi",
// };

// WRONG - stores as "[Object Object]"
// localStorage.setItem("user", user);
// console.log(localStorage.getItem("user"));          // [Object Object] ❌


// =============== CORRECT WAY - Storing an Object ================
let user = {
    name: "Shubham",
    age: 25,
    city: "Delhi",
};

// STEP 1 -> Convert object to JSON string
let userString = JSON.stringify(user);
console.log(userString);                    // {"name":"Shubham","age":25,"city":"Delhi"}

// STEP 2 -> Store the JSON string in localStorage
localStorage.setItem("user", userString);
console.log(localStorage.getItem("user"))   // {"name":"Shubham","age":25,"city":"Delhi"}


// ============= CORRECT WAY - Reading an Object Back =============
// //  STEP 1 -> get the JSON string from localStorage
// let storedString = localStorage.getItem("user");
// console.log(typeof (storedString));                 // String

// // STEP 2 -> Convert JSON string back to JavaScript Object 
// let storedUser = JSON.parse(storedString);
// console.log(typeof (storedUser));                   // object

// // Now we can use it as a normal Object
// console.log(storedUser.name);                       // Shubham
// console.log(storedUser.age);                        // 25
// console.log(storedUser.city);                       // Delhi