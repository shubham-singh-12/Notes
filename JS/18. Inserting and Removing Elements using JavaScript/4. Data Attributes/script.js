// =================================================================== Data Attributes ===================================================================


// ============================ SYNTAX ============================
element.dataset;


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");

// Access all data attributes via .dataset
console.log(box.dataset);
// DOMStringMap { createdBy: "Shubham", conceptBy: "Shourya" }

// Access individual data attribute
console.log(box.dataset.createdBy);                 // Shubham
console.log(box.dataset.conceptBy);                 // Shourya