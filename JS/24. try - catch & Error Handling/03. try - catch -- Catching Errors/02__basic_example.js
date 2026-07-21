// ==================================================================== BASIC EXAMPLE =====================================================================

// =========================== EXAMPLE ============================
console.log("Before try");

try {
    console.log(undefinedVariable);         // Error happens here ❌
    console.log("This never runs");
} catch (error) {
    console.log(`Caucht an error: ${error.message}`);
};

console.log("After try/catch - Program continues! ✅")


// OUTPUT:
/*
Before try
Caucht an error: undefinedVariable is not defined
After try/catch - Program continues! ✅
*/