// ====================================================================== innerText ======================================================================


// ============================ SYNTAX ============================
element.innerText;


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// innerText -> only text, no HTML tags
console.log(container.innerText);
/* OUTPUT:
Box 1
Box 2
*/

// Gives only the visible text content ✅