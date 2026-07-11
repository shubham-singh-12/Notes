// ============================================================ REST WITH OBJECT DESTRUCTURING ============================================================

// ============================ SYNTAX ============================
// let {key_1, key_2, ...restObject} = ObjectName;


// =========================== EXAMPLE ============================
let obj = {
    name: "Shubham",
    age: 24,
    city: "Delhi",
    Interested: "Full Stack Developer",
};

let {name, age, ...otherKeys} = obj;

console.log(name);                  // Shubham
console.log(age);                   // 24
console.log(otherKeys);             // { city: 'Delhi', Interested: 'Full Stack Developer' }