// ================================================================== THE STORAGE EVENT ===================================================================

// ============================ SYNTAX ============================
// window.onstorage = function (e) {
//   // Runs when storage is updated in another tab
// };

// // ================== OR using addEventListener ===================
// window.addEventListener("storage", function (e) {
//   // runs when storage is updated in another tab
// });


// ======== Storage Event - Properties of the Event Object ========
window.onstorage = function(e) {
    console.log(e.key);             // Which key was changed
    console.log(e.oldValue);        // What was the old value
    console.log(e.newValue);        // What is the new value
    console.log(e.url);             // URL of the page that made the change
    console.log(e.storageArea);     // Which storage was changed (localStorage OR sessionStorage)
};
