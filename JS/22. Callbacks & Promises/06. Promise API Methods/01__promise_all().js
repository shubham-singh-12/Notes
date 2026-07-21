// ==================================================================== PROMISE.ALL() =====================================================================

let prom_1 = new Promise(function (res, rej) {
    setTimeout(function () {
        res("Promise 1: Success ✅");
    }, 1000);
});

let prom_2 = new Promise(function (res, rej) {
    setTimeout(function () {
        rej("Promise 2: FAILED ❌");
    }, 2000);
});


Promise.all([prom_1, prom_2])
    .then(function (result) {
        console.log(`All succeeded: ${result}`);
    })
    .catch(function (err) {
        console.log(`Failed because ${err}`);
    });
