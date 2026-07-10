// ====================================================================== beforeend ======================================================================


// ============================ SYNTAX ============================
// element.insertAdjacentHTML("beforeend", newElement);
// element.insertAdjacentHTML("beforeend", "content for new element");


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element, set attribute, inner html
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "<b>beforeend</b> — I am last inside container</div>";

// beforeend -> inserts INSIDE container, at the END.
container.insertAdjacentElement("beforeend", newDiv);