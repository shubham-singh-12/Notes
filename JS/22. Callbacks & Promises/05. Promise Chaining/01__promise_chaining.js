// =================================================================== PROMISE CHAINING ===================================================================

// ============================ SYNTAX ============================
// promise
//     .then((value) => {
//         return newValue;
//     })
//     .then((value) => {
//         return newValue;
//     })
//     .then((value) => console.log(value))
//     .catch((err) => console.log(er));

// =========================== EXAMPLE ============================
let prom = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(1);
    }, 1000);
});

prom
    .then(function (val) {
    console.log(val);
    return val * 2;
    })
    .then(function (val) {
        console.log(val);
        return val * 2;
    })
    .then(function (val) {
        console.log(val);
        return val * 2;
    })
    .then(function(val) {
        console.log(val);
    })
    .catch(function (err) {
        console.log(`Error: ${err}`);
    });
