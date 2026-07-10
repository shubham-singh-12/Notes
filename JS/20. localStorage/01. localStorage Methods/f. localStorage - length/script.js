// ================================================================ localStorage.length() =================================================================

// ============================ SYNTAX ============================
// localStorage.length;                // returns a number

// =========================== EXAMPLE ============================
console.log(localStorage.length);               // 0

// Set Item
localStorage.setItem("name", "Shubham");
localStorage.setItem("city", "Delhi");
localStorage.setItem("color", "crimson");
localStorage.setItem("age", "25")
console.log(localStorage.length);               // 4

// Remove Item
localStorage.removeItem("color");
localStorage.removeItem("age");
console.log(localStorage.length);               // 2

// Clear All
localStorage.clear();
console.log(localStorage.length);               // 0