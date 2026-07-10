// ================================================================ sessionStorage.clear() ================================================================

// ============================ SYNTAX ============================
// sessionStorage.clear();


// =========================== EXAMPLE ============================
// Set item into sessionStorage
sessionStorage.setItem("name", "Shubham");
sessionStorage.setItem("age", "25");
sessionStorage.setItem("city", "Delhi");

// Get item from sessionStorage
console.log(sessionStorage.getItem("name"));            // Shubham
console.log(sessionStorage.getItem("age"));             // 25
console.log(sessionStorage.getItem("city"));            // Delhi

// Clear the sessionStorage
sessionStorage.clear();

// Again get the items from sessionStorage
console.log(sessionStorage.getItem("name"));            // null
console.log(sessionStorage.getItem("age"));             // null
console.log(sessionStorage.getItem("city"));            // null