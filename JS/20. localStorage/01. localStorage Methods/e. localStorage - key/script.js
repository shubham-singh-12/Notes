// ================================================================== localStorage.key() ==================================================================

// ============================ SYNTAX ============================
// localStorage.key(index);


// =========================== EXAMPLE ============================
localStorage.setItem("name", "Shubham");
localStorage.setItem("age", "24");
localStorage.setItem("city", "Delhi");
localStorage.setItem("color", "red");

// Get key by index (index start from 0)
console.log(localStorage.key(0));           // "name"
console.log(localStorage.key(1));           // "age"
console.log(localStorage.key(2));           // "city"
console.log(localStorage.key(3));           // "color"
console.log(localStorage.key(4));           // null ❌ (only 4 keys, index 4 doesn't exists)