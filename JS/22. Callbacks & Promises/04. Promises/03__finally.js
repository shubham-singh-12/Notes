// ====================================================================== .finally() ======================================================================

let prom1 = new Promise(function (res, rej) {
    setTimeout(function () {
        let randomNumber = Math.random();

        if (randomNumber < 0.5) {
            rej("Radom number did not support us ❌");
        } else {
            res("Shubham ✅");
        }
    }, 2000);
});

prom1
    .then(function (val) {
        console.log(`RESOLVED: ${val}`);
    })
    .catch(function (err) {
        console.log(`REJECTED: ${err}`);
    })
    .finally(function () {
        console.log(`Done -- Cleaning complete 🧹`);
    });
