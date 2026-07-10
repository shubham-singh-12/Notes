// ================================================================ insertAdjacentElement ================================================================


// ============================ SYNTAX ============================
// element.insertAdjacentElement("before", newElement);
// element.insertAdjacentElement("before", "New element content");


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element
let newElement = document.createElement("div");
newElement.textContent = "I am a paragraph";

// insertAdjacentElement -> insert an element node
container.insertAdjacentElement("afterend", newElement);