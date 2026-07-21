// ================================================================== PROMISE.RESOLVE() ===================================================================

let prom_1 = new Promise(function (res, rej) {
    setTimeout(function () {
        res("Promise 1: SUCCESS ✅");
    }, 1000);
});


Promise.resolve(prom_1)
    .then(function (result) {
        console.log(result);
    });