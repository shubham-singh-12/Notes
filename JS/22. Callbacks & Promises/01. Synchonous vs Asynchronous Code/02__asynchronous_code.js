// ================================================================== ASYNCHRONOUS CODE ===================================================================

// =========================== EXAMPLE ============================
console.log("Line 1 - Start");

setTimeout(function () {
    console.log("Line 2 - Inside setTimeout");
}, 2000);

console.log("Line 3 - End");


// OUTPUT:
// Line 1 - Start
// Line 3 - End
// Line 2 - Inside setTimeout