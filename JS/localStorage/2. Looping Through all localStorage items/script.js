// ======================================================== Looping through all localStorage items ========================================================

// =========================== EXAMPLE ============================
// setItem in localStorage
localStorage.setItem("name", "Shubham");
localStorage.setItem("city", "Delhi");
localStorage.setItem("age", "25");
localStorage.setItem("color", "crimson");

console.log(localStorage.length);                   // 4

// Looping
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`${key}: ${value}`)
};

// name: Shubham
// city: Delhi
// age: 25
// color: crimson