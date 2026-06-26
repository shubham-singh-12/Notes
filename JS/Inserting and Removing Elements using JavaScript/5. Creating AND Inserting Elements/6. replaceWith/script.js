// ==================================================================== replaceWith() ====================================================================


// ============================ SYNTAX ============================
// element.replaceWith(newElement);


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element, set attribute & inner html
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "I <b>replaced</b> the container.";

// Replace container by newDiv ✅
container.replaceWith(newDiv);