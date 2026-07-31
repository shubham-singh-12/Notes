// ====================== DECLARED VARIABLE =======================
let a;
console.log(a);                 // undefined

let b;
console.log(b);                 // undefined


// ================== DECLARED & ASSIGN VARIABLE ==================
let c = 10;
console.log(c);                 // 10

let d = 20;
console.log(d);                 // 20


// ================= REDECLARED & ASSIGN VARIABLE =================
// let e = 30;
// let e = 40;
// console.log(e);                 // Uncaught SyntaxError: Identifier 'e' has already been declared


// ======================= UPDATE VARIABLE ========================
let f = 50;
f = 60;
console.log(f);                 // 60


// ================= ACCESS BEFORE INITIALIZATION =================
console.log(g);                 // Uncaught ReferenceError: Cannot access 'g' before initialization
let g = 70;