// ==================================================================== hasAttribute() ====================================================================


// ============================ SYNTAX ============================
element.hasAttribute("attributeName");                  // returns true / false


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");

// hasAttribute
console.log(box.hasAttribute("style"));         // false ❌ (no style yet)
console.log(box.hasAttribute("id"));            // true ✅ (id="box" exists)