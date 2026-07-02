// ============================================================= sessionStorage.removeItem() ==============================================================

// ============================ SYNTAX ============================
// sessionStorage.removeItem("key");


// =========================== EXAMPLE ============================
// Set item into sessionStorage
sessionStorage.setItem("name", "Shubham");
sessionStorage.setItem("city", "Delhi");
sessionStorage.setItem("age", "25");

// Remove Item from sessionStorage
sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name"));            // null ❌

console.log(sessionStorage.getItem("city"));            // Delhi ✅