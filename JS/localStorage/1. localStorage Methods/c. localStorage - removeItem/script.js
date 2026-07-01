// ============================================================== localStorage.removeItem() ===============================================================

// ============================ SYNTAX ============================
// localStorage.removeItem("key");

// =========================== EXAMPLE ============================
// Set item
localStorage.setItem("name", "Shubham");
localStorage.setItem("city", "Delhi");
localStorage.setItem("age", "25");

// Remove Item
localStorage.removeItem("city");
console.log(localStorage.getItem("city"));          // null ❌

// "name" and "color" still exists
console.log(localStorage.getItem("name"));          // "Shubham" ✅
console.log(localStorage.getItem("age"));           // "25" ✅