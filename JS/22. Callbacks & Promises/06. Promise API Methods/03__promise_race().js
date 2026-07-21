// ==================================================================== PROMISE.RACE() ====================================================================

let prom_1 = new Promise(function (res, rej) {
    setTimeout(function() {
        res("Promise 1: SUCCESS ✅");
    }, 1000);
});

let prom_2 = new Promise(function (res, rej) {
    setTimeout(function () {
        rej("Promise 2: FAILED ❌");
    }, 2000);
});


Promise.race([prom_1, prom_2])
    .then(function(winner) {
        console.log(`Winner: ${winner}`);
    })
    .catch(function (err) {
        console.log(`First one failed: ${err}`);
    });