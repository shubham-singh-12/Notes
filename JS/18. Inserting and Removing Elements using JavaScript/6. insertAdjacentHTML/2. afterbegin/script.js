// ====================================================================== afterbegin ======================================================================


// ============================ SYNTAX ============================
element.insertAdjacentHTML("afterbegin", newElement);
element.insertAdjacentHTML("afterbegin", "content for new element");


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element, set attributes & inner html
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "<b>afterbegin</b> — I am first inside container";

// afterbegin -> inserts INSIDE container, at the BEGINNING
container.insertAdjacentElement("afterbegin", newDiv);