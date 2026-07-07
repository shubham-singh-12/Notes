// ================================================================ WHY ASYNC/AWAIT EXISTS ================================================================

// ========================= THE PROBLEM ==========================
// Simulate a server data call -- returns a Promise
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                firstName: "Shubham",
                lastName: "Singh"
            });
        }, 3000)
    });
}

// Calling getData directly
// let response = getData()
// console.log(response);


// // OLD SOLUTION -- .then() Chaining
// getData()
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });


// ================ Better Solution - async/await =================
async function fetchData() {
    let response = await getData();         // WAITS here until promise resolves ✅
    console.log(response);                  // {firstName: 'Shubham', lastName: 'Singh'} ✅
};

fetchData();