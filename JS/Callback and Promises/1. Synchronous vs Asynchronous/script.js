// ============================================================= Synchronous VS Asynchronous ==============================================================


// ========================= Synchronous ==========================
// console.log("Hey, this is line 1");         // Hey, this is line 1
// console.log("Hey, this is line 2");         // Hey, this is line 2
// console.log("Hey, this is line 3");         // Hey, this is line 3
// console.log("Hey, this is line 4");         // Hey, this is line 4


// ========================= Asynchronous =========================
console.log("This is Line 1");

setTimeout(function() {
    console.log("This is Line 2");
}, 3000);

console.log("This is Line 3");

// ACTUAL OUTPUT
// This is Line 1
//      ⬇️
// This is Line 3
//      ⬇️
// This is Line 2