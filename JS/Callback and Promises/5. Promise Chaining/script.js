// =================================================================== Promise Chaining ===================================================================

// let prom = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(1);                 // Resolved with value 1
//     }, 1000);
// });

// prom.then(function (value) {
//     console.log(value);             // 1
//     return value * 2;               // pass 2 to next .then
// }).then(function (value) {
//     console.log(value);             // 2
//     return value * 2;               // pass 4 to next .then
// }).then(function (value) {
//     console.log(value);             // 4
//     return value * 2;               // pass 8 to next .then
// }).then(function(value) {
//     console.log(value);             // 8
// })
// .catch(function(error) {
//     console.log(`Error: ${error}`);
// });



// ==== Multiple .then() on Same Promise (Independent Handler) ====
let prom = new Promise (function (resolve, reject) {
    resolve("Hello");
});


// These run INDEPENDENTLY - not chained
prom.then(function(value) {
    console.log(`Handler 1: ${value}`);             // Handler 1: Hello
});

prom.then(function(value) {
    console.log(`Handler 2: ${value}`);             // Handler 2: Hello
})