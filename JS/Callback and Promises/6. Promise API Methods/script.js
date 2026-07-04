// ================================================================= Promise API Methods ==================================================================

// ======================== Promise.all() =========================
// ============================ SYNTAX ============================
// Promise.all([prom1, prom2, prom3]).then(values => {
//     console.log(values);                // array of all resolved values
// });

// =========================== EXAMPLE ============================
// let prom1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Shubham");
//     }, 2000);
// });

// let prom2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Shubham 2");
//     }, 1000);
// });

// let p3 = Promise.all([prom1, prom2]);

// p3.then(function(value) {
//     console.log(value);                 // [ 'Shubham', 'Shubham 2' ]
// }).catch(function(error) {
//     console.log(`Error: ${error}`)
// });





// ================================================================
// ===================== Promise.allSettled() =====================
// ============================ SYNTAX ============================
// Promise.allSettled([prom1, prom2]).then(results => {
//     console.log(results);
// });

// =========================== EXAMPLE ============================
// let prom1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Shubham");
//     }, 2000);
// });

// let prom2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject(`Random number not supporting ❌`);
//     }, 1000);
// });


// Promise.allSettled([prom1, prom2]).then(function(results) {
//     console.log(results);

//     /*
//     [
//         { status: 'fulfilled', value: 'Shubham' },
//         { status: 'rejected', reason: 'Random number not supporting ❌' }
//     ]
//     */
// });





// ================================================================
// ======================== Promise.race() ========================
// ============================ SYNTAX ============================
// Promise.race([prom1, prom2]).then(value => {
//     console.log(value);             // value of whichever settled first
// });

// =========================== EXAMPLE ============================
// let prom1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(`Shubham - 2 seconds`);
//     }, 2000);
// });

// let prom2 = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve(`Shubham 2 - 1 seconds`);
//     }, 1000);
// });


// Promise.race([prom1, prom2]).then(function(value) {
//     console.log(`Winner: ${value}`);
// });





// ================================================================
// ======================== Promise.any() =========================
// ============================ SYNTAX ============================
// Promise.any([prom1, prom2, prom3]).then(value => {
//     console.log(value);                 // first resolved value
// });

// =========================== EXAMPLE ============================
// let prom1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject(`prom1 failed ❌`);
//     }, 500);
// });

// let prom2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(`prom2 success ✅`);
//     }, 1000);
// });

// let prom3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(`prom3 seccess ✅`);
//     }, 2000);
// });


// Promise.any([prom1, prom2, prom3]).then(function(value) {
//     console.log(`First to resolved: ${value}`);
// }).catch(function(error) {
//     console.log(`All rejected: ${error}`);
// });





// ================================================================
// ============= Promise.resolve() & Promise.reject() =============

// Create a promise that is already resolved ✅
Promise.resolve(`I am already RESOLVED!`).then(function(value) {
    console.log(value);             // I am already RESOLVED!
});

// Create a promise that is already rejected ❌
Promise.reject(`I am already REJECTED!`).catch(function(error) {
    console.log(error);             // I am already REJECTED!
});