// ================================================================= sessionStorage.ke() ==================================================================


// ============================ SYNTAX ============================
// sessionStorage.key(index);


// =========================== EXAMPLE ============================
// Set item into sessionStorage
sessionStorage.setItem("name", "Shubham");
sessionStorage.setItem("age", "25");
sessionStorage.setItem("city", "Delhi");

// Get the key name
console.log(sessionStorage.key(0));         // name
console.log(sessionStorage.key(1));         // age
console.log(sessionStorage.key(2));         // city