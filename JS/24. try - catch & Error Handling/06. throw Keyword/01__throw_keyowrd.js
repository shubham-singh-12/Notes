// ============================ SYNTAX ============================
// throw new Error("Custom error message");





// ================================================================
// =========================== EXAMPLE ============================
// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("You must be 18 or older !!!");
//     } else {
//         return "Access granted ✅";
//     }

//     try {
//         console.log(checkAge(15));
//     } catch (err) {
//         console.log("Error: ", err.message);
//     }
// }

// checkAge(15);





// ================================================================
// === Throwing different Types (not recommended, but possible) ===
try {
    throw "Simple string error";            // ❌ Avoid - no stack trace, no message
} catch (err) {
    console.log(err);                       // Simple string error
}


try {
    throw 404;                          // ❌ Avoid - just a number
} catch (err) {
    console.log(err);                   // 404
}


// ✅ Best Practice - always throw an Error Object
try {
    throw new Error("Proper error with stack trace");
} catch (err) {
    console.log(err.message);               // Proper error with stack trace
    console.log(err instanceof Error);      // true
}