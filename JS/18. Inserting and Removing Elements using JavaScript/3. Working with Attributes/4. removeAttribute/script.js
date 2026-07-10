// =================================================================== removeAttribute() ===================================================================


// ============================ SYNTAX ============================
element.removeAttribute("attributeName");


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");

box.removeAttribute("style");
console.log(box.hasAttribute("style"));                 // false