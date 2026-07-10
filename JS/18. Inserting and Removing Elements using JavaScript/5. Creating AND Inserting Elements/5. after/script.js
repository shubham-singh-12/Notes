// ======================================================================= after() =======================================================================


// ============================ SYNTAX ============================
// element.after(newElement);


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element, add attribute, innerHTML
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "I am <b>after</b> the container.";

// Insert AFTER container (as sibling) ✅
container.after(newDiv);