// ================================================================== CALLBACK FUNCTION ===================================================================

// ============================ SYNTAX ============================
// function outerFunction(callback) {
//     // Some work
//     callback();                 // Calling the passed function
// };

// =========================== EXAMPLE ============================
// function greetUser(name, callback) {
//     console.log(`Hello ${name}`);
//     callback();
// };

// function sayBye() {
//     console.log(`Goodbye! 👋`);
// };

// greetUser("Shubham", sayBye);

// // OUTPUT:
// // Hello Shubham
// // Goodbye! 👋

// ====================== REAL WORLD EXAMPLE ======================
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback(sc); // called once script finishes loading
    document.head.append(sc);
};

loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",
    function (script) {
        console.log(`Script loaded: ${script.src} ✅`);
    },
);