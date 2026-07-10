// ================================================================== insertAdjacentText ==================================================================


// ============================ SYNTAX ============================
element.insertAdjacentText("before", "plain text here");


// =========================== EXAMPLE ============================
let newText = document.querySelector(".box");

// insertAdjacentText -> insert plain text (not HTML)
newText.insertAdjacentText("beforeend", " - plain text here");


// OUTPUT: Existing Box - plain text here