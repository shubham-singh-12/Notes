// =============================================================== IF, IF-ELSE, IF-ELSE-IF ================================================================

// ============================== IF ==============================
// if (true) {
//     console.log("Running...");
// }

// ================================================================
// =========================== IF-ELSE ============================
// let isRaining = true;
// // let isRaining = false;

// if (isRaining) {
//     console.log("Take umbrella...");
// } else {
//     console.log("Umbrella not required...");
// };

// ================================================================
// ========================== IF-ELSE-IF ==========================
// let userAge = 52;

// if (userAge < 18) {
//     console.log("Not eligible to vote...");
// } else if (userAge > 55) {
//     console.log("Over Aged...");
// } else {
//     console.log("Eligible for vote...");
// };

// ================================================================
// ========================== NESTED IF ===========================
const isLoggedIn = true;
const hasSubscription = true;

if (isLoggedIn) {
    console.log("Welcome back...");

    if (hasSubscription) {
        console.log("Access granted to premium content...");
    } else {
        console.log("Please upgrade your account to view this content...");
    }
} else {
    console.log("Please log in first...");
}