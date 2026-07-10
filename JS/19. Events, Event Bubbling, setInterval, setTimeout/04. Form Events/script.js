// ===================================================================== FORM EVENTS ======================================================================


let input = document.getElementById("nameInput");
let form = document.getElementById("myForm");
let output = document.getElementById("output");


// focus -> When input is clicked / tabbed into
input.addEventListener("focus", function () {
  input.style.borderColor = "blue";
});


// // blur -> When input loses focus
// input.addEventListener("blur", function () {
//   input.style.borderColor = "red";
// });


// // input -> Fires every time user types
// input.addEventListener("input", function (e) {
//   output.textContent = `You are typing: ${e.target.value}`;
// });


// // submit -> Fires when form is submitted
// form.addEventListener("submit", function (e) {

//   // Prevent page reload
//   e.preventDefault();

//   alert(`Form submitted! Name: ${input.value}`);
// });