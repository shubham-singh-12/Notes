// ======================================================================= afterend =======================================================================


// ============================ SYNTAX ============================
// element.insertAdjacentHTML("afterend", newElement);
// element.insertAdjacentHTML("afterend", "content for new element");


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element, set attributes & inner html
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "<b>afterend</b> — I am first inside container";

// afterend -> inserts AFTER the container (as sibling)
container.insertAdjacentElement("afterend", newDiv);