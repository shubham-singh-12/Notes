// ================================================================ sessionStorage.length =================================================================

// ============================ SYNTAX ============================
// sessionStorage.length;


// =========================== EXAMPLE ============================
// Check current sessionStorage length
console.log(sessionStorage.length);                 // 0

// Set item into sessionStorage
sessionStorage.setItem("name", "Shubham");
sessionStorage.setItem("age", "25");
sessionStorage.setItem("city", "Delhi");

// Get latest length from sessionStorage
console.log(sessionStorage.length);                 // 3