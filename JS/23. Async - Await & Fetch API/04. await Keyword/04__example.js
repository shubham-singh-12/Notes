// ======================================================================= EXAMPLE ========================================================================

function getData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(455);
        }, 3500);
    });
};

console.log("Loading modules...");
console.log("Do something else");

async function main() {
    console.log("Waiting for data...");

    let data = await getData();

    console.log(`Data Received: ${data}`);
    console.log("Now processing data.");
};

main();
console.log("Task 2 - Runs without waiting for main()");