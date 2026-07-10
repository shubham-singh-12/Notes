// ================================================================ localStorage.getItem() ================================================================

// ============================ SYNTAX ============================
// localStorage.getItem("key");        // Returns value as string or null

// ================================================================
// =========================== EXAMPLE ============================
// Store values
localStorage.setItem("name", "Shubham");
localStorage.setItem("city", "Delhi");

// Get stored Values
console.log(localStorage.getItem("name"));          // "Shubham" ✅
console.log(localStorage.getItem("city"));          // "Delhi" ✅

// Key that doesn't exists
console.log(localStorage.getItem("phone"));         // null ❌