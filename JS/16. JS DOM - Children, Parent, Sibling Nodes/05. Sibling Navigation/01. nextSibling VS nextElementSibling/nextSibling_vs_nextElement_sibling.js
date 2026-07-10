// ========================================================== nextSibling VS nextElementSibling =============================================================

// ========================= nextSibling ==========================

// // EXAMPLE

// let cons = document.body.firstElementChild.children[3];
// // <div class="box">Box 4</div>

// // nextSibling → gives text node ⚠️
// console.log(cons.nextSibling);                  // #text





// ================================================================

// EXAMPLE

let cons = document.body.firstElementChild.children[3];
// <div class="box">Box 4</div>

// nextElementSibling → gives next element ✅
console.log(cons.nextElementSibling);
// <div class="box">Box 5</div>