// ================================================================== Callback Functions ==================================================================

// =================== Simple Callback Example ====================
// function greetUser(name, callback) {
//     console.log(`Hello ${name}`);           // Hello Shubham
//     callback();         // Calling the callback function
// };

// // Defining callback function separately
// function sayBye() {
//     console.log(`Goodbye!!`);               // Goodbye!!
// };

// // Passing sayBye as a callback
// greetUser("Shubham", sayBye);


// ===================== Callback with Events =====================
document.querySelector("#btn").addEventListener("click", function() {
    console.log("Button clicked!");                 // Button clicked!
});

// setTimeout uses a callback function
setTimeout(function() {
    console.log("I ran after 2 seconds");           // I ran after 2 seconds
}, 2000);