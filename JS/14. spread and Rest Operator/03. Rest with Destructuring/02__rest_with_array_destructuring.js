// ============================================================ REST WITH ARRAY DESTRUCTURING =============================================================

// ============================ SYNTAX ============================
// let [firstValue, ...restValue] = arrayName;


// =========================== EXAMPLE ============================
// let arr = ["Shubham", "Shivam", "Shourya"];

// let [user_1, ...otherUsers] = arr;

// console.log(user_1);                    // Shubham
// console.log(otherUsers);                // [ 'Shivam', 'Shourya' ] ✅ rest collects remaining





// ========================================================================================================================================================
// =================================================== More values Extracted, Rest takes the Remaining ====================================================

// =========================== EXAMPLE ============================
// let arr = ["Shubham", "Shivam", "Shourya", "Rishab", "Harshit", "Muskan"];

// let [first, second, third, ...otherUsers] = arr;

// console.log(first);                     // Shubham
// console.log(second);                    // Shivam
// console.log(third);                     // Shourya
// console.log(otherUsers);                // [ 'Rishab', 'Harshit', 'Muskan' ]





// ========================================================================================================================================================
// ==================================================== If nothing is left, Rest gives an empty array =====================================================

// =========================== EXAMPLE ============================
// let arr = ["Shubham", "Shivam", "Shourya"];

// let [first, second, third, ...otherUsers] = arr;

// console.log(first);                     // Shubham
// console.log(second);                    // Shivam
// console.log(third);                     // Shourya
// console.log(otherUsers);                // []