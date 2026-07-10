// =================================================================== Hiding Elements ===================================================================


// ============================ SYNTAX ============================
element.hidden;                         // read -> true or false
element.hidden = true;                  // hide the element
element.hidden = false;                 // show the element


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Check if hidden
console.log(container.hidden);                  // false

// Hide the Container
container.hidden = true;
// container disappears from page ✅
// Adds hidden attribute -> <div class="container" hidden>

// Show it again
container.hidden = false;
// container re-appears ✅