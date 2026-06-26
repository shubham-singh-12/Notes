// ====================================================================== prepend() ======================================================================


// ============================ SYNTAX ============================
parentElement.prepend(newElement);


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "I am <b>prepend</b> - I appear first!!!";

// Inserted as FIRST child ✅
container.prepend(newDiv);