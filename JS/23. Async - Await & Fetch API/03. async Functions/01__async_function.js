// ==================================================================== ASYNC FUNCTION ====================================================================

// ============================ SYNTAX ============================
// async function functionName() {
//     // Code
// };


// =========================== EXAMPLE ============================
async function asyncFn() {
    return 42;
};

console.log(asyncFn());             // Promise {<fulfilled>: 42}

asyncFn()
    .then(function (val) {
    console.log(val);               // 42
});