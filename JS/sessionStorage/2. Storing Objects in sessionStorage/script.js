// =========================================================== STORING OBJECT IN SESSIONSTORAGE ===========================================================

let user = {
  name: "Shubham",
  age: 25,
  city: "Delhi",
};

// STORE -> convert object to string first
sessionStorage.setItem("user", JSON.stringify(user));

// RETRIEVE -> Convert string back to object
let storedUser = JSON.parse(sessionStorage.getItem("user"));

console.log(storedUser.name);           // Shubham
console.log(storedUser.age);            // 25
console.log(storedUser.city);           // Delhi