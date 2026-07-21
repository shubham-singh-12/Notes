// =================================================================== THE error OBJECT ===================================================================

// =========================== EXAMPLE ============================
try {
    null.someProperty;              // TypeError ❌
} catch (error) {
    console.log(error.name);        // TypeError
    console.log(error.message);     // Cannot read properties of null
    console.log(error.stack);       // // full stack trace (where error happened)
}
