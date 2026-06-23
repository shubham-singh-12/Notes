// ====================================================== previousSibling VS previousElementSibling =========================================================

// ======================= previousSibling ========================

// // EXAMPLE

// let cons = document.body.firstElementChild.children[3];
// // <div class="box">Box 4</div>

// // previousSibling → gives text node ⚠️
// console.log(cons.previousSibling);                  // #text





// ================================================================
// ==================== previousElementSibling ====================

// EXAMPLE

let cons = document.body.firstElementChild.children[3];
// <div class="box">Box 4</div>

console.log(cons.previousElementSibling);
// <div class="box">Box 3</div>