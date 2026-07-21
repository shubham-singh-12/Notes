// =================================================================== PROMISE.REJECT() ===================================================================


let prom_2 = new Promise(function (res, rej) {
    setTimeout(function () {
        rej("Promise 2: FAILED ❌");
    }, 2000);
});


Promise.reject(prom_2)
    .catch(function (err){
        console.log(err);
    });