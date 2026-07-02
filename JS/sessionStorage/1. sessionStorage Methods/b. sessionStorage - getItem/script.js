// =============================================================== sessionStorage.getItem() ===============================================================

// ============================ SYNTAX ============================
// sessionStorage.getItem("key");


// =========================== EXAMPLE ============================
// Stores data in sessionStorage
sessionStorage.setItem("name", "Shubham");
sessionStorage.setItem("city", "Delhi");
sessionStorage.setItem("age", "25");

// Get item from sessionStorage
console.log(sessionStorage.getItem("name"));            // Shubham
console.log(sessionStorage.getItem("phone"));           // null ❌