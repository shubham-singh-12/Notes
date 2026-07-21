// ======================================================= THE PROBLEM - WHY WE NEED ASYNC / AWAIT ========================================================

function getData() {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(455);
        }, 3500);
    });
};

console.log("Loading modules...");
console.log("Do something else.");

let data = getData();
console.log(data);              // Promise {<pending>} <- not ready yet ⚠️

console.log("Process data");    // runs before data arrives ⚠️