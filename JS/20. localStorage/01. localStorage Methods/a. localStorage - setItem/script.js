// ================================================================ localStorage.setItem() ================================================================

// ============================ SYNTAX ============================
// localStorage.setItem("key", "value");


// ================================================================
// =========================== EXAMPLE ============================

// Basic setItem
localStorage.setItem("name", "Shubham");
// Store -> Key: "name", Value: "Shubham"

// Storing different types of data
localStorage.setItem("city", "Delhi");
localStorage.setItem("color", "Crimson");
localStorage.setItem("age", "25");          // numbers stored as strings

// Updating existing key
localStorage.setItem("age", "30");          // Overwrite "25" with "30" ✅