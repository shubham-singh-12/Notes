// ======================================================================= PROMISES =======================================================================

// ============================ SYNTAX ============================
// let myPromise = new Promise(function (resolve, reject) {
//     // Do async work

//     // Call resolve() on success
//     // Call reject() on failure
// });

// =========================== EXAMPLE ============================
// let myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log("Done! ✅");
//         resolve("Shubham");
//     }, 3000);
// });

// myPromise.then(function(value) {
//     console.log(value);
// });

// // OUTPUT:
// // Done! ✅
// // Shubham