// ==================================================================== getAttribute() ====================================================================


// ============================ SYNTAX ============================
element.getAttribute("attributeName");


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");

// getAttribute()
console.log(box.getAttribute("style"));                 // background-color: crimson;
console.log(box.getAttribute("id"));                    // box1