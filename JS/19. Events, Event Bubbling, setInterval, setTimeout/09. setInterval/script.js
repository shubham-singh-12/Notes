// ==================================================================== setInterval() =====================================================================


// ============================ SYNTAX ============================
// let intervalId = setInterval(function() {
//     // code to run repeatedly
// }, intervalInMilliseconds);


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");

// Function to generate a random color
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Runs Every 2 seconds (200 ms) - Keeps repeating
let boxColor = setInterval(function() {
    box.style.backgroundColor = randomColor();
}, 1000);