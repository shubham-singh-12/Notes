// ======================================================================= PROMISES =======================================================================

// ================================================================== Creating a Promise ==================================================================

// ============================ SYNTAX ============================
// let promise = new Promise(function(resolve, rejected) {
//     // Do some async work here
//     // Call resolve() when work is done successfully ✅
//     // Call reject() when work fails ❌
// });



// ================================================================ Basic Promise Example =================================================================

// ================== Promise with resolve only ===================
// let prom1 = new Promise(function (resolve, reject) {
//   // Simulation an async operation with setTimeout
//   setTimeout(function () {
//     console.log("Yes, i am done ✅");
//     resolve("Shubham");
//   }, 3000);
// });

// // .then -> runs when promise is resolved ✅
// prom1.then(function (value) {
//   console.log(value);           // Shubham
// });



// ================ Promise with Resolve & Reject =================
// let prom1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {

//         // Random number between 0 & 1
//         let a = Math.random().toFixed(1);

//         if (a < 0.5) {
//             console.log(a)
//             reject ("No, the random number was not supporting us ❌")
//         } else {
//             console.log(a)
//             resolve ("The random number was supporting us ✅")
//         }
//     }, 2000);
// });

// // .then -> runs if Resolved ✅
// // .catch -> runs if Reject ❌
// prom1.then(function(value) {
//     console.log(`Resolved with: ${value}`);
// })
// .catch(function(value) {
//     console.log(`Rejected with: ${value}`);
// });




// ========================== .finally() ==========================
let prom1 = new Promise(function(resolve, reject) {
    setTimeout(function() {

        // Random number between 0 & 1
        let a = Math.random().toFixed(1);

        if (a < 0.5) {
            console.log(a)
            reject ("No, the random number was not supporting us ❌")
        } else {
            console.log(a)
            resolve ("The random number was supporting us ✅")
        }
    }, 2000);
});

// .then -> runs if Resolved ✅
// .catch -> runs if Reject ❌
prom1.then(function(value) {
    console.log(`Resolved with: ${value}`);
})
.catch(function(value) {
    console.log(`Rejected with: ${value}`);
})
// always runs - whether resolved or rejected ✅
.finally(function() {
    console.log(`Promise is settled (Cleanup done)`);
});