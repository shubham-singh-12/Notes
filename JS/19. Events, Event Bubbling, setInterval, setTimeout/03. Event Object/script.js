// ===================================================================== EVENT OBJECT =====================================================================


// ============================ SYNTAX ============================
// element.addEventListener("click", function(e) {
//     // e is the event object
//     console.log(e);
// })


// ================ COMMON EVENT OBJECT PROPERTIES ================
// document.addEventListener("keydown", function(e) {
//     console.log(e.type);                    // type of event -> "keydown"
//     console.log(e.key);                     // key that was pressed -> "a"
//     console.log(e.currentTarget);           // element that listener is on
//     console.log(e.bubbles);                 // does this event bubble? -> true / false
//     console.log(e.altKey);                  // was Alt key pressed? -> true / false
//     console.log(e.ctrlKey);                 // was Ctrl key pressed? -> true / false
//     console.log(e.shiftKey);                // was Shift key pressed? -> true / false
// });


document.addEventListener("click", function(e) {
    console.log(e.clientX);                 // X position of mouse
    console.log(e.clientY);                 // Y position of mouse
    console.log(e.target);                  // element that was actually clicked
});