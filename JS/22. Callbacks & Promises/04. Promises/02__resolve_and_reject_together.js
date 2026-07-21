// ============================================================== RESOLVE & REJECT TOGETHER ===============================================================

let prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let a = Math.random();

        if (a < 0.5) {
            reject("Random number did not support us ❌");
        } else {
            resolve("Shubham ✅");
        }
    }, 2000);
});

prom1
    .then(function (val) {
        console.log(`Resolved: ${val}`);
    })
    .catch(function (err) {
        console.log(`Rejected: ${err}`);
    });
