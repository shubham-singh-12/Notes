// ======================================================================== METHOD ========================================================================

// ======================= Object.keys(obj) =======================
// let obj = {
//     name: "Shubham",
//     age: 24,
// };

// let keys = Object.keys(obj);
// console.log(keys);                  // [ 'name', 'age' ]





// ========================================================================================================================================================
// ====================== Object.values(obj) ======================
// let obj = {
//     name: "Shubham",
//     age: 24,
// };

// let values = Object.values(obj);
// console.log(values);                    // [ 'Shubham', 24 ]





// ========================================================================================================================================================
// ===================== Object.entries(obj) ======================
// let obj = {
//     name: "Shubham",
//     age: 24,
// };

// let entries = Object.entries(obj);
// console.log(entries);
// // [ [ 'name', 'Shubham' ], [ 'age', 24 ] ]





// ========================================================================================================================================================
// ================ Object.assign(target, source) =================
// let obj_1 = {
//     name:"Shubham",
//     age: 24,
// };

// let obj_2 = {}
// Object.assign(obj_2, obj_1);

// console.log(obj_2);                 // { name: 'Shubham', age: 24 }





// ========================================================================================================================================================
// ====================== Object.freeze(obj) ======================
// let obj = {
//     name: "Shubham",
//     age: 24,
// };

// Object.freeze(obj);

// obj.city = "Delhi";         // Not Applied
// delete obj.name;            // Not Applied

// console.log(obj);                   // { name: 'Shubham', age: 24 }





// ========================================================================================================================================================
// ======================= Object.seal(obj) =======================
// let obj = {
//     name: "Shubham",
//     age: 24,
// };

// Object.seal(obj);

// obj.city = "Delhi";             // Operation Not Performed
// delete obj.name;                // Operation Not Performed
// obj.name = "Shivam";            // Operation Done

// console.log(obj);               // { name: 'Shivam', age: 24 }





// ========================================================================================================================================================
// ================= ObjName.hasOwnProperty(key) ==================
// let obj = {
//     name: "Shubham",
//     age: 24,
// };

// console.log(obj.hasOwnProperty("age"));                 // true
// console.log(obj.hasOwnProperty("city"));                // false
// console.log(obj.hasOwnProperty("Shubham"));             // false