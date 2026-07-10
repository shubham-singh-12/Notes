// =================================================================== KEYBOARD EVENTS ===================================================================


// =========================== keydown ============================
// document.addEventListener("keydown", function (e) {
//   console.log(e);           // full event object
//   console.log(e.key);       // the key pressed (e.g., "a", "Enter", "ArrowUp")

//   // e.keyCode is DEPRECATED ⚠️ -- don't use it/
//   // use e.key instead ✅


//   document.getElementById("keyResult").innerHTML = ` Pressed: <b>${e.key}</b>`;
// });





// ================================================================
// ============================ keyup =============================
document.addEventListener("keyup", function(e) {
  console.log(`Key Released: ${e.key}`);

  document.getElementById("keyResult").innerHTML = ` Released: <b>${e.key}</b>`;
})
