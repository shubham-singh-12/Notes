// ====================== DECLARED VARIABLES ======================
var a;
console.log(a);                 // undefined

var b;
console.log(b);                 // undefined

var c;
console.log(c);                 // undefined

// ================= DECLARED & ASSIGN VARIABLES ==================
var d = 10;
console.log(d);                 // 10

var e = 20;
console.log(e);                 // 20

var f = 30;
console.log(f);                 // 30

// =================== REDECLARED SAME VARIABLE ===================
var g = 40;
var g = 50;
console.log(g);                 // 50


// ======================= UPDATE VARIABLE ========================
var h = 60;
h = 70;
console.log(h);                 // 70

// ================= ACCESS BEFORE INITIALIZATION =================
console.log(i);                 // undefined
var i = 70;