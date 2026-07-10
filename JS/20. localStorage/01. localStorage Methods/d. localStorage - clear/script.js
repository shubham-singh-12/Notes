// ================================================================= localStorage.clear() =================================================================

// ============================ SYNTAX ============================
// localStorage.clear();

// =========================== EXAMPLE ============================
// Store Item
localStorage.setItem("name", "Shubham");
localStorage.setItem("city", "Delhi");
localStorage.setItem("age", "25");

// Get item
console.log(localStorage.getItem("name"));          // "Shubham"
console.log(localStorage.getItem("city"));          // "Delhi"
console.log(localStorage.getItem("age"));           // "25"


// Clear Everything
localStorage.clear();

// After clear get items
console.log(localStorage.getItem("name"));          // null
console.log(localStorage.getItem("city"));          // null
console.log(localStorage.getItem("age"));           // null