// ============================================================= REST IN FUNCTION PARAMETERS ==============================================================

// =========================== EXAMPLE ============================

// =============== The Problem -- Fixed Parameters ================
// function sum(a, b, c) {
//     return a + b + c;
// };

// console.log(sum(1, 2, 3));              // 6 ✅
// console.log((sum(1, 2, 3, 4)))          // 6 ❌ -> 4 is ignored! Extra values are lost.




// =============== The Soluton -- Rest Parameter ✅ ===============
// ============================ SYNTAX ============================
// function functionName(...parameterName) {
//     // ParaneterName is now an array
// };

// =========================== EXAMPLE ============================
// function showAll(...arr) {
//     console.log(arr);               // Packed into an array ✅
// };

// showAll(1, 2, 3);                   // [ 1, 2, 3 ]
// showAll(1, 2, 3, 4, 5);             // [ 1, 2, 3, 4, 5 ]
// showAll(6, 7, 8, 99, 100);          // [ 6, 7, 8, 99, 100 ]





// ========================================================================================================================================================
// ========================================================= Using Rest to build a sum() Function =========================================================
function sum(...rest) {
    let sumResult = rest.reduce(function (acc, previous) {
        return acc + previous;
    }, 0);

    return sumResult;
};

console.log(sum(1, 2, 3, 4, 5));                    // 15
console.log(sum(100, 1, 2, 3, 4, 5, 20));           // 135