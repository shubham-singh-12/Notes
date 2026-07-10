// ======================================================================= before() =======================================================================


// ============================ STNTAX ============================
// element.before(newElement);


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element (using createElement)
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "I am <b>before</b> the container";

// Inserted BEFORE container ✅
container.before(newDiv);