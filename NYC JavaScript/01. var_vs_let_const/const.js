// ====================== DECLARED VARIABLES ======================
// const a;                        // Uncaught SyntaxError: Missing initializer in const declaration


// ================= DECLARED & ASSIGN VARIABLES ==================
const b = 10;
console.log(b);                 // 10

// =================== REDECLARED SAME VARIABLE ===================
// const c = 40;
// const c = 50;
// console.log(g);                 // Uncaught SyntaxError: Identifier 'c' has already been declared


// ======================= UPDATE VARIABLE ========================
// const d = 60;
// d = 70;
// console.log(h);                 // Uncaught TypeError: Assignment to constant variable.

// ================= ACCESS BEFORE INITIALIZATION =================
console.log(e);                 // Uncaught ReferenceError: Cannot access 'e' before initialization
const e = 70;