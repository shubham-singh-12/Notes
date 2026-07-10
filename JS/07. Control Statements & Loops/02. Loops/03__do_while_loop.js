// ==================================================================== do-while LOOP ====================================================================


// // SYNTAX

// // initialization
// do {
//     // Code to be executed
//     // Increment / Decrement
// } while (condition);



// EXAMPLE

var i = 1;

do {
    console.log(i);                 // 1 2 3 4 5
    i++;
} while (i <= 5);


// This is wrong condition, but it run before condition is checked
var j = 10;

do {
    console.log("Runs once!");      // Runs once!
    j++;
} while (j <= 5);