// ==================================================================== setAttribute() ====================================================================


// ============================ SYNTAX ============================
element.setAttribute("attributeName", "value");


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");

box.setAttribute("style", "backgroundColor: crimson");
console.log(box.hasAttribute("style"));                 // true ✅