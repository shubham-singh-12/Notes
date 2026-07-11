// ========================================================================================================================================================
// =============================================================== SPREAD IN FUNCTION CALLS ===============================================================
// ========================================================================================================================================================


// ============================ SYNTAX ============================
// functionName(...arrayName);


// ================ Without Spread -- The Problem =================
// function consoleThreeUsers(user_1, user_2, user3){
//     console.log(user_1);
//     console.log(user_2);
//     console.log(user3);
// };

// let users = ["Shubham", "Shivam", "Shourya"];

// consoleThreeUsers(users);                   // ❌ Wrong
// // [ 'Shubham', 'Shivam', 'Shourya' ]
// // undefined
// // undefined


// ================ With Spread -- The Solution ✅ ================
function consoleThreeUsers(user_1, user_2, user_3) {
    console.log(user_1);
    console.log(user_2);
    console.log(user_3);
};

let users = ["Shubham", "Shivam", "Shourya"];

consoleThreeUsers(...users);                    // ✅ CORRECT
// Shubham
// Shivam
// Shourya