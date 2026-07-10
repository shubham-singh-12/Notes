// ==================================================================== EVENT BUBBLING ====================================================================



// =================== Event listener on child ====================
// document.querySelector(".child").addEventListener("click", function () {
//   alert("Child was clicked!!");
// });





// ================================================================
// ============== Event listenet on click-container ===============
// document.querySelector(".child-container").addEventListener("click", function() {
//   alert("Child Container was clicked!");
// });





// ================= Event listener on container ==================
// document.querySelector(".container").addEventListener("click", function() {
//     alert("Container was clicked!!");
// });





// ========================================================================================================================================================
// =============================================================== STOPPING EVENT BUBBLING ================================================================

// ============================ SYNTAX ============================
// element.addEventListener("click", function(e) {
//   e.stopPropagation();          // Stps bubbling here
// });


// =========================== EXAMPLE ============================

// == Stop propagation on child -> event won't bubble to parent ===
// document.querySelector(".child").addEventListener("click", function(e) {
//   e.stopPropagation();        // bubble stopped here ✅
//   alert("Child was Clicked! (no bubbling)");
// });


// =========== Stop propagation on child-container too ============
document.querySelector(".child-container").addEventListener("click", function(e) {
  e.stopPropagation();      // bubble stopped here ✅
  alert("Child Container was clicked! (no bubbling)");
});


// ============== Normal Event Listener on Container ==============
document.querySelector(".container").addEventListener("click", function() {
  alert("Container was Clicked!");
});